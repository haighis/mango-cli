import {Args, Command, Flags, ux} from '@oclif/core'
import { Application, 
  ApplicationService, 
  ApplicationShell, 
  ApplicationShellService, 
  Install, 
  InstallService, 
  Kind, 
  KindService, 
  ShellType, 
  ShellTypeService} from '../client/index'
import { Global } from '../Global'
import AuthContext from '../AuthContext';
import Context, { ContextInput } from '../db/models/Context';
import Credential, { CredentialInput } from '../db/models/Credential';
import LoginSession, { LoginSessionInput } from '../db/models/LoginSession';
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
    let kind = args.kind;
    let isValid = wellKnownKinds.indexOf(kind!) > -1;
    
    // Validate args kind is a well known kind
    if(!isValid) { // TODO allow developers to add their own Kinds which will be read from kind API
      this.warn(new Error(`Kind provided is not a well known Mango Kind: ${args.kind}`))
    }

    // let openApiConfig = await authConext.buildOpenApiConfig();
    // if(!openApiConfig) {
    //   return;
    // }
    let openApiConfig = undefined; 
    if(kind != "Context") { //|| kind != "Credential" || kind = "Account"
      let authConext = new AuthContext();
      openApiConfig = await authConext.buildOpenApiConfig();
      if(openApiConfig == undefined) {
        return;
      }
    }

    let uiTableColumns =  {}
    // output in table
    if (kind) {
      switch(kind) {
        case "Credential": 
        apiServerResult = await Credential.findAll() as CredentialInput[];
        uiTableColumns = { consumerId: { header: 'Consumer Id'}, context: { header: 'Context'}, secretKey: { header: 'Secret Key'}}      
        break;
        case "Context": 
          apiServerResult = await Context.findAll() as ContextInput[];
          uiTableColumns = {context: { header: 'Context'}, loginApiServerUrl: { header: 'Login API Server'}, apiServerUrl: { header: 'API Server'}, apiGatewayAdminUrl: { header: 'Kong Admin API Server'}, isDefaultContext: { header: 'Is Default' } }      
          break;
        case "Account": 
          apiServerResult = await LoginSession.findAll() as LoginSessionInput[];
          uiTableColumns = {username: { header: 'Username'} }      
          break;  
        case "ShellType":
          // only show active applications
          // user can pass --all to show all
          apiServerResult = await new ShellTypeService(openApiConfig!).findShellTypes() as ShellType[];
          uiTableColumns = {id: { header: 'Identifer'}, classification: { header: 'Classification'}, subClassification: { header: 'Sub Classification'}, fileReference: { header: 'File Ref'}, description: {header: "Desc"} }      
          break;
        case "Application":
            // only show active applications
            // user can pass --all to show all
            apiServerResult = await new ApplicationService(openApiConfig!).findApplications() as Application[]; 
            //apiServerResult = await ApplicationService.findApplications() as Application[];
            uiTableColumns = {applicationName: { header: 'Name'}, applicationUrl: { header: 'Url'}, installedInstanceCode: { header: 'Instance Code'} }      
            break;  
        case "ApplicationShell":
          apiServerResult = await new ApplicationShellService(openApiConfig!).findApplicationShells() as ApplicationShell[];
          uiTableColumns = {applicationShellName: { header: 'Name'}, shellTypeId: { header: 'Shell Type Identifier'},  installedInstanceCode: { header: 'Instance Code'} }      
          break;
        case "Install":
          apiServerResult = await new InstallService(openApiConfig!).findApplicationInstalls() as Install[];
          uiTableColumns = {created: { header: 'Created'}, uri: { header: 'Uri'}, code: { header: 'Code'}, status: {header: 'Status'} }      
          break;
        case "Kind":
          apiServerResult = await new KindService(openApiConfig!).findKinds() as Kind[];
          uiTableColumns = {name: { header: 'Name'}, description: { header: 'Description'} }      
          break;
        default:
          // code block
      }
      ux.table(apiServerResult, uiTableColumns)
      if(apiServerResult.length == 0) {
        this.log(`No entries`);  
      }
    }
  }
}
