import {Args, Command, Flags} from '@oclif/core'
import inquirer = require('inquirer')
import AuthContext from '../AuthContext'
import { AccountService, ShellType, ShellTypeService,   OpenAPI, OpenAPIConfig } from '../client'
import Context, { ContextInput } from '../db/models/Context'
import LoginSession from '../db/models/LoginSession'
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
    // let authConext = new AuthContext();
    // let openApiConfig = authConext.buildOpenApiConfig();
    // if(!openApiConfig) {
    //   console.log(' some how we are here')
    //   return;
    // }
    // TODO figure out how to add anonymous service/route to kong
    // so we don't have to bypass agi gateway in order to authenticate
    const openApiConfig: OpenAPIConfig = {
      BASE: 'http://localhost:7878',
      VERSION: '1.0',
      WITH_CREDENTIALS: false,
      CREDENTIALS: 'include',
      TOKEN: undefined,
      USERNAME: undefined,
      PASSWORD: undefined,
      HEADERS: undefined,
      ENCODE_PATH: undefined,
  };
  
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
    const prompt : any = await inquirer.prompt(questions)
    .then(async answers => {
      let res: any = answers;
      let loginResult: any = await new AccountService(openApiConfig!).login(
      { 
        username: res.username, 
        password: res.password 
      });
      // Store a Login session for the user 
      if(loginResult) {
        let loginDate = new Date();
        // Delete all existing logins
        await LoginSession.destroy({ force: true, truncate: true });
        await LoginSession.create({username: res.username, createdAt: loginDate});
        this.log(`Login succeeded @ ${loginDate}`);
      }
      //this.log(`account ${res.username} ${res.password} ${res.confirmPassword} login result ${loginResult.token}`);
    });
  }
}
