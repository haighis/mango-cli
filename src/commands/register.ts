import {Args, Command, Flags} from '@oclif/core'
import inquirer = require('inquirer');
import { AccountService, OpenAPIConfig } from '../client';
import { Global } from '../Global';

export default class Register extends Command {
  static description = 'Mango Platform User Registration'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Register)
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
        message: 'Enter email:',
        name: 'email',
      },
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
    const prompt : any = await inquirer.prompt(questions)
    .then(async answers => {
      let res: any = answers;
      let registerResult: any = await new AccountService(openApiConfig!).register(
        { 
          email: res.email,
          username: res.username, 
          password: res.password,
          roles: []
        });
        if(registerResult) {
          this.log(`Account ${res.email} with username ${res.username} successfully registered.\n`);
        } else {
          this.log(`Account not registered:\n ${registerResult}`);
        }
    });
  }
}