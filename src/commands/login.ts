import {Command} from '@oclif/core'
import inquirer = require('inquirer')
import AuthContext from '../AuthContext'
import { AccountService, ShellType, ShellTypeService,   OpenAPI, OpenAPIConfig } from '../client'
import Context from '../db/models/Context'
import LoginSession from '../db/models/LoginSession'

export default class Login extends Command {
  static description = 'Mango Platform Accouint Login'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Login)
    // TODO figure out how to add anonymous service/route to kong
    // so we don't have to bypass agi gateway in order to authenticate
    
    let authConext = new AuthContext();
    let openApiConfig = await authConext.buildAccountApiServerOpenApiConfig();
    if(!openApiConfig) {
      return;
    }
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
