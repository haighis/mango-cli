import {Args, Command, Flags} from '@oclif/core'
import * as yaml from 'js-yaml'
import * as fs from 'fs'
import * as path from 'path';
import * as http from 'http';
import * as fsExtra from 'fs-extra';
import * as superagent from 'superagent';
import * as admZip from 'adm-zip';
import { Global } from '../Global'
import { ApplicationService, ApplicationShell, ApplicationShellService, ShellType, ShellTypeService } from '../client'
import AuthContext from '../AuthContext';
import { OpenAPIConfig } from '../client';
import { ItemService } from '../client';
import Context, { ContextInput } from '../db/models/Context';

//const yaml = require('js-yaml');

export default class Create extends Command {
  static description = 'Create a resource from a file or from stdin.'

  static examples = [
    '<%= config.bin %> <%= command.id %> -f path/file.yaml',
  ]

  static flags = {
    file: Flags.string({char: 'f', description: 'file to read'}),
  }

  static args = {
    kind: Args.string({ name: 'create', description: 'Kind for resource being created.'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Create)

    // Todo check for user session if the Kind is anything but Context

    let wellKnownKinds = Global.WellKnownKinds;
    let kind = args.kind;
    let authConext = new AuthContext();
    
    let openApiConfig = undefined; 
    if(kind != "Context") { //|| kind != "Credential" || kind = "Account"
      openApiConfig = await authConext.buildOpenApiConfig();
      if(openApiConfig == undefined) {
        return;
      }
    }
    
    let isValid = wellKnownKinds.indexOf(kind!) > -1;
    //let shellTypeId = flags.shell_type_id;
    // Validate args kind is a well known kind
    if(!isValid) {
      this.warn(new Error(`Kind provided is not a well known Mango Kind: ${args.kind}`));
    }
    // Provide support for single yaml document creation 
    const doc = yaml.loadAll(fs.readFileSync(`${flags.file}`, 'utf8')) as any[];
  // // Process one or more kinds in array
  // console.log(doc);

  /// Application Shell - default no foundation id
  // generate installed instance code,
  // grab application shell from artifact? 
  // scaffold code for angular
  // extract code from zip file to current directory
  // set installed instance code in code
  if (kind) {
    switch(kind) {
      case "Context":
        // Multiple creation support
        let contexts: ContextInput[] = doc as unknown as ContextInput[];
          contexts.forEach(async item => {
            let testInput: ContextInput = { 
              context: item.context, 
              loginApiServerUrl: item.loginApiServerUrl,
              apiGatewayAdminUrl: item.apiGatewayAdminUrl,
              apiServerUrl: item.apiServerUrl, 
              isDefaultContext: item.isDefaultContext 
            }; 
            await Context.create(testInput);         
          });
        break;
      case "Application":
      case "ApplicationShell":
        // Single creation only
        // Get the shell_type_id flag
        //let appShell: ApplicationShell = doc as unknown as ApplicationShell;
        let appShell: ApplicationShell[] = doc as unknown as ApplicationShell[];
        this.CreateApplicationShell(appShell, openApiConfig!);
        break;
      case "Install":
      case "ShellType":
        // Multiple creation support
        let shellTypes: ShellType[] = doc as unknown as ShellType[];
        //let appService: ApplicationService = new ApplicationService(openApiConfig);
        let shellTypeService: ShellTypeService = new ShellTypeService(openApiConfig!);
        shellTypes.forEach(async item => {
          await shellTypeService.postShellType(item);
        });
        break;
      case "Kind":
   
      default:
        // code block
    }
  }
  this.log(`${kind} created @ ${new Date()}`)
  // let apiServerResult = await ApplicationService.postApplication(doc);
  // console.log('res after post ', apiServerResult)
  //   // yaml.loadAll(flags.file, function (doc: any) {
  //   //   console.log(doc);
  //   // });
  }

  async CreateApplicationShell(appShell: ApplicationShell[], openApiConfig: OpenAPIConfig) {
    // what do we return from this method? errors etc? boolean if success or else 
    // Call mango api server to create app shell and return a instance code
    //console.log(' app shell ', appShell[0].applicationShellTypeId, ' appShell.applicationShellTypeId ', appShell)
    
    // Get App Shell Type by applicationShellTypeId
    let appShellType: ShellType = await new ShellTypeService(openApiConfig).findById(appShell[0].shellTypeId);
    // let appShell: ApplicationShell = {
    //   applicationShellName: '',
    //   installedInstanceCode: '',
    //   namespace: '',
    //   applicationShellTypeId: 
    // };
    let appShellCreated: ApplicationShell = await new ApplicationShellService(openApiConfig).postApplicationShell(appShell[0]);
    //console.log('shell type ', appShellType);
    // Get App Shell Zip. 
    //this.downloadFile(appShellType.fileReference);
    // Unzip to local temp location
    const source = appShellType.fileReference;
    const zipfile = path.basename(source); 
    let extension = path.extname(source);
    let fullFileInfo = path.basename(source);
    let onlyFilename = path.basename(fullFileInfo, extension);
    let finalFolderName = appShellCreated.applicationShellName.replace(/\s+/g,"_");
    superagent
    .get(source)
    .on('error', function(error: any) {
      console.log(error);
    })
    .pipe(fs.createWriteStream(zipfile))
    .on('finish', function() {
        // add code below to here
        var zip = new admZip(zipfile);
        zip.extractAllTo('./temp');    
        let instanceCode = appShellCreated.installedInstanceCode ?? 'NOT_FOUND';
        // Write instance code to AppShell GlobalConstants
        const content = `export class GlobalConstants \n { \n \t public static ApplicationInstanceKey: string = "${instanceCode}"; \n }`;
        fs.writeFileSync(`./temp/${onlyFilename}/src/app/global.ts`, content);

        fs.rename(`./temp/${onlyFilename}`,`./temp/${finalFolderName}`,function(error: any) {
          if (error) {
              throw error;
          } else {
            console.log("success!");
          }});
          // Copy from temp location to user current location wherever that is
          fsExtra.copy('./temp', '.', function(error: any) {
            if (error) {
                throw error;
            } else {
              console.log("success!");
            }
          }); 

          fsExtra.remove('./temp', function(error: any) { 
            if (error) {
              throw error;
            } else {
              console.log("success!");
            }}
          );
          
        // Move file to location user specified with flag file_location
    });
    
    this.log(`No entries`);  

    // Copy to user current location
  }
}
