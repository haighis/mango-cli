import {Args, Command, Flags} from '@oclif/core'
import inquirer = require('inquirer');
import { Global } from '../Global';

export default class Register extends Command {
  static description = 'Mango Platform User Registration'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  // static flags = {
  //   // flag with a value (-n, --name=VALUE)
  //   name: Flags.string({char: 'n', description: 'name to print'}),
  //   // flag with no value (-f, --force)
  //   force: Flags.boolean({char: 'f'}),
  // }

  // static args = {
  //   file: Args.string({description: 'file to read'}),
  // }

  public async run(): Promise<void> {
    const questions = [
      {
        type: 'input',
        message: 'Enter username:',
        name: 'username',
      },
      {
        type: 'password',
        message: 'Enter Password:',
        name: 'password',
      },
      {
        type: 'password',
        name: 'confirmPassword',
        message: 'Confirm Password:',
        validate: Global.requireLetterAndNumber,
      },
    ];
    let userContext = "";
    let userSecretKey = "";
    const prompt : any = await inquirer.prompt(questions)
    .then(answers => {
      let res: any = answers;
      // userContext = res.context[0];
      // userSecretKey = res.SecretKey;
      //credentialApi.add(userSecretKey,userContext);
      this.log(`account ${res.username} ${res.password} ${res.confirmPassword}`);
    });
    // const {args, flags} = await this.parse(Register)

    // const name = flags.name ?? 'world'
    // this.log(`hello ${name} from /Users/johnhaigh/Projects/mango-platform/cli/mango-cli/src/commands/register.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
