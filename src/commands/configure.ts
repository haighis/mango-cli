import {Args, Command, Flags} from '@oclif/core'
import { Label, SetupService } from '../client/index';
import contextApi from '../localdb/contextApi';
import credentialApi from '../localdb/credentialApi';
// System-Initial-Setup
// Context 
// Pre-requisites - context's must exist in the system
import * as inquirer from 'inquirer';
import { Global } from '../Global';
export default class Configure extends Command {
  static description = 'Configure Mango Platform Settings'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Configure)
    
    const source = contextApi.list();
    const choices = source // make a copy of the source
    const questions = [
      {
        type: 'list',
        message: 'Please select a Context to associate a secret key with:',
        name: 'context',
        default: choices[0],
        choices: choices.map(item => {
          // the default checked value is determined by the status of todo
          return { name: item.context }
        })
      },
      {
        type: 'password',
        name: 'SecretKey',
        message: 'Enter Secret Key to associate with context:',
        validate: Global.requireLetterAndNumber,
        // validate(value: any) {
        //   const valid = !isNaN(parseFloat(value));
        //   return valid || 'Please enter a number';
        // },
        // filter: Number,
      },
    ];
    let userContext = "";
    let userSecretKey = "";
    const prompt : any = await inquirer.prompt(questions)
    .then(answers => {
      let res: any = answers;
      userContext = res.context;
      userSecretKey = res.SecretKey;
      credentialApi.add(userSecretKey,userContext);
      this.log(`Secret Key saved for context ${userContext}`);
    });

    // if (flags.setup) {
    //   let apiServerResult:Label = await SetupService.postSetup({name:"",kind:"",namespace:""})
    //   this.log(`Mango Platform ${apiServerResult.name} setup is complete.`)
    // }
  }
}
