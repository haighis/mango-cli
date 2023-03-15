import {Args, Command, Flags} from '@oclif/core'

export default class Configure extends Command {
  static description = 'Configure Mongo CLI options.'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = {
    file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Configure)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/johnhaigh/Projects/mango-platform/cli/space-cli/src/commands/configure.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
