import {Args, Command, Flags, ux} from '@oclif/core'
//import {ApplicationInstallApi} from 'apps-js-client/apps'
import { Application, ApplicationInstall, ApplicationInstallService, ApplicationService, ApplicationShell, ApplicationShellService, CancelablePromise } from '../client'
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
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),

    ...ux.table.flags()
  }

  static args = {
    getArgs: Args.string({ name: 'get', description: 'get'}),
  }

  public async run(): Promise<void> {
    //const {args2 } = await this.parse(Get)
    const {args, flags} = await this.parse(Get)
    let response2: any[] = [] 
    //let response = await ApplicationService.findApplications() as Application[];    
    //let test = CancelablePromise<Array<ApplicationInstall>>
    //const responseData = await ApplicationInstallApi.findApplicationInstalls().execute({ url: 'https://localhost:7878' }) //MyApi.myFunction().execute(destination);
    const name = flags.name ?? 'world'

    //console.log('REsulots ', response, ' args ', args)
    // this.log(`hello ${name} testing ${response[0]} from /Users/johnhaigh/Projects/mango-platform/cli/space-cli/src/commands/get.ts`)
    // output in table
    if (args.getArgs) {
      switch(args.getArgs) {
        case "application":
          // TODO
          // only show active applications
          // user can pass --all to show all
          response2 = await ApplicationService.findApplications() as Application[];
          break;
        case "application_shell":
          response2 = await ApplicationShellService.findApplicationShells() as ApplicationShell[];
          break;
        case "application_install":
          response2 = await ApplicationInstallService.findApplicationInstalls() as ApplicationInstall[];
        default:
          // code block
      }
      ux.table(response2, {applicationName: { header: 'Name'}, applicationUrl: { header: 'Url'}, installedInstanceCode: { header: 'Instance Code'} })

      //console.log(response2)
      //this.log(`you input --get: ${args.getArgs}`)
    }
  }
}
