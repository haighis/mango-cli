import {Args, Command, Flags} from '@oclif/core'
import { Label, SetupService } from '../client/index';
// System-Initial-Setup
// Context 
// Pre-requisites - user must be authenticated. todo 
export default class Configure extends Command {
  static description = 'Configure Mango Platform Settings'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    setup: Flags.boolean({description: 'Mango System-Initial-Setup'}),
    // flag with no value (-f, --force)
    //force: Flags.boolean({char: 'f'}),
  }

  static args = {
    file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Configure)

    //const name = flags.name ?? 'world'
    //this.log(`hello ${name} from /Users/johnhaigh/Projects/mango-platform/cli/space-cli/src/commands/configure.ts`)
    // if (args.file) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }

    if (flags.setup) {
      let apiServerResult:Label = await SetupService.postSetup({name:"",kind:"",namespace:""})
      this.log(`Ran Mango Platform ${apiServerResult.name} `)
    }
  }
}
