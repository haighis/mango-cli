import {Args, Command, Flags} from '@oclif/core'
import inquirer = require('inquirer')
import { Global } from '../Global'

export default class Login extends Command {
  static description = 'Mango Platform User Login'

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
    const {args, flags} = await this.parse(Login)

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
      }
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
  }
}
