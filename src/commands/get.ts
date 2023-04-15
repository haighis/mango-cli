import {Args, Command, Flags, ux} from '@oclif/core'
import { Application, 
  ApplicationService, 
  ApplicationShell, 
  ApplicationShellService, 
  Install, 
  InstallService, 
  Kind, 
  KindService, 
  OpenAPI, 
  OpenAPIConfig, 
  ShellType, 
  ShellTypeService} from '../client/index'
import contextApi from '../localdb/contextApi';  
import { Global } from '../Global'
import Context from '../localdb/Context';
import Credential from '../localdb/Credential';
import { head } from 'superagent';
import credentialApi from '../localdb/credentialApi';

//import {ApplicationInstallApi} from 'apps-js-client/apps'
//import { Application, Install, ApplicationService, ApplicationShell, ApplicationShellService, CancelablePromise, Kind, KindService } from '../client'
export default class Get extends Command {
  public static enableJsonFlag = true
  static description = 'Display one or many resources'

  // static examples = [
  //   '<%= config.bin %> <%= command.id %>',
  // ]

  static examples = [
    `$ mango-cli get applications`,
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'kind to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),

    ...ux.table.flags()
  }

  static args = {
    kind: Args.string({ name: 'get', description: 'get'}),
  }

  public async run(): Promise<void> {
    //const {args2 } = await this.parse(Get)
    const {args, flags} = await this.parse(Get)
    let apiServerResult: any[] = [] 
    let wellKnownKinds = Global.WellKnownKinds;
    //let response = await ApplicationService.findApplications() as Application[];    
    //let test = CancelablePromise<Array<ApplicationInstall>>
    //const responseData = await ApplicationInstallApi.findApplicationInstalls().execute({ url: 'https://localhost:7878' }) //MyApi.myFunction().execute(destination);
    //const name = flags.name ?? 'world'
    let kind = args.kind;
    let isValid = wellKnownKinds.indexOf(kind!) > -1;
    
    // Validate args kind is a well known kind
    if(!isValid) {
      this.warn(new Error(`Kind provided is not a well known Mango Kind: ${args.kind}`))
    }

    let allContexts = contextApi.list();
    let allCredentials = credentialApi.list();

    let getCurrentContext = allContexts.find(x => x.defaultContext == true);
    if(getCurrentContext == undefined) {
      this.warn(new Error(`No Default Context is defined. Please create a Default Context before proceeding.`));
      return;
    }
    let getCurrentCredentials = allCredentials.find(x => x.context == getCurrentContext!.context);
    if(getCurrentCredentials == undefined) {
      this.warn(new Error(`No Credentials defined for Default Context. Please retreive a secret key and specify a credential for Default Context before proceeding.`));
      return;
    }
    let headers: Record<string,string> = { 'x-api-key': getCurrentCredentials!.secretKey}
    const openApiConfig: OpenAPIConfig = {
        BASE: getCurrentContext!.apiServerUrl,
        VERSION: '1.0',
        WITH_CREDENTIALS: false,
        CREDENTIALS: 'include',
        TOKEN: undefined,
        USERNAME: undefined,
        PASSWORD: undefined,
        HEADERS: headers,
        ENCODE_PATH: undefined,
    };

    let uiTableColumns =  {}
    // output in table
    if (kind) {
      switch(kind) {
        case "Credential": 
        apiServerResult = credentialApi.list() as Credential[];
        uiTableColumns = {context: { header: 'Context'}, secretKey: { header: 'Secret Key'}}      
        break;
        case "Context": 
          apiServerResult = contextApi.list() as Context[];
          uiTableColumns = {context: { header: 'Context'}, apiServerUrl: { header: 'API Server Url'}, defaultContext: { header: 'Is Default' } }      
          break;
        case "ShellType":
          // only show active applications
          // user can pass --all to show all
          apiServerResult = await ShellTypeService.findShellTypes() as ShellType[];
          uiTableColumns = {id: { header: 'Identifer'}, classification: { header: 'Classification'}, subClassification: { header: 'Sub Classification'}, fileReference: { header: 'File Ref'}, description: {header: "Desc"} }      
          break;
        case "Application":
            // only show active applications
            // user can pass --all to show all
            let appService: ApplicationService = new ApplicationService(openApiConfig);
            apiServerResult = await appService.findApplications() as Application[]; 
            //apiServerResult = await ApplicationService.findApplications() as Application[];
            uiTableColumns = {applicationName: { header: 'Name'}, applicationUrl: { header: 'Url'}, installedInstanceCode: { header: 'Instance Code'} }      
            break;  
        case "ApplicationShell":
          apiServerResult = await ApplicationShellService.findApplicationShells() as ApplicationShell[];
          uiTableColumns = {applicationShellName: { header: 'Name'}, shellTypeId: { header: 'Shell Type Identifier'},  installedInstanceCode: { header: 'Instance Code'} }      
          break;
        case "Install":
          apiServerResult = await InstallService.findApplicationInstalls() as Install[];
          uiTableColumns = {created: { header: 'Created'}, uri: { header: 'Uri'}, code: { header: 'Code'}, status: {header: 'Status'} }      
          break;
        case "Kind":
          apiServerResult = await KindService.findKinds() as Kind[];
          uiTableColumns = {name: { header: 'Name'}, description: { header: 'Description'} }      
          break;
        default:
          // code block
      }
      ux.table(apiServerResult, uiTableColumns)
      //console.log(response2)
      if(apiServerResult.length == 0) {
        this.log(`No entries`);  
      }
    }
  }
}
