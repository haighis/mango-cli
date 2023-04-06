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

//import {ApplicationInstallApi} from 'apps-js-client/apps'
//import { Application, Install, ApplicationService, ApplicationShell, ApplicationShellService, CancelablePromise, Kind, KindService } from '../client'
export default class Get extends Command {
  public static enableJsonFlag = true
  static description = 'Display one or many resources'

  // static examples = [
  //   '<%= config.bin %> <%= command.id %>',
  // ]

  static examples = [
    `$ mongo get applications`,
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
    const name = flags.name ?? 'world'
    let kind = args.kind;
    let isValid = wellKnownKinds.indexOf(kind!) > -1;
    
    // Validate args kind is a well known kind
    if(!isValid) {
      this.warn(new Error(`Kind provided is not a well known Mango Kind: ${args.kind}`))
      //this.log(`Kind provided is not a well known Mango Kind: ${args.getArgs}`)
    }

    let uiTableColumns =  {}
    //console.log('REsulots ', response, ' args ', args)
    // this.log(`hello ${name} testing ${response[0]} from /Users/johnhaigh/Projects/mango-platform/cli/space-cli/src/commands/get.ts`)
    // output in table
    if (kind) {
      switch(kind) {
        case "ShellType":
          // only show active applications
          // user can pass --all to show all
          apiServerResult = await ShellTypeService.findShellTypes() as ShellType[];
          uiTableColumns = {id: { header: 'Identifer'}, classification: { header: 'Classification'}, subClassification: { header: 'Sub Classification'}, fileReference: { header: 'File Ref'}, description: {header: "Desc"} }      
          break;
        case "ShellType":
            // only show active applications
            // user can pass --all to show all
            apiServerResult = await ApplicationService.findApplications() as Application[];
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
