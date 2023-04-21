import {Command, Flags} from '@oclif/core'
import * as inquirer from 'inquirer';
import { SetupService } from '../SetupService';
import AuthContext from '../AuthContext';
import { OpenAPIConfig } from '../client';
import Context, { ContextInput } from '../db/models/Context';
import Credential from '../db/models/Credential';
import LoginSession from '../db/models/LoginSession';
import { OpenApiConfigBuilder } from '../OpenApiConfigBuilder';
export default class Configure extends Command {
  static description = 'Configure Mango Platform Configure'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {    
    default_data: Flags.boolean({char: 'd', description: 'Insert default development Context called "development" to Mango CLI database.'}),
    simple: Flags.boolean({char: 's', description: ''})
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Configure)
    // todo move this to lower and set the base url
    
    if(flags.default_data) {
      let svc = new SetupService();
      await svc.AddDefaultDevContextIfNotExists();
      return;
    } 
    // Create development context if it doesn't already exist
    let svc = new SetupService();
    await svc.AddDefaultDevContextIfNotExists();
    // Simple Development Configuration
    if(flags.simple) {
      const source = await Context.findAll(); //  contextApi.list();
      const choices = source // make a copy of the source
      const yesNoChoices = ['Yes','No']
      const questions = [
        {
          type: 'list',
          message: 'Please select a Context to specify as development context.\n This will setup Mango Platform CLI without an API gateway',
          name: 'context',
          default: choices[0],
          choices: choices.map(item => {
            // the default checked value is determined by the status of todo
            return { name: item.context }
          })
        },
        {
          type: 'list',
          name: 'makeDefault',
          message: 'Would you like to make this the default Context?',
          default: yesNoChoices[1],
          choices: yesNoChoices
        }
      ];
      let userContext = "";
      const prompt : any = await inquirer.prompt(questions)
      .then(async answers => {
        let res: any = answers;
        userContext = res.context;
        let additionalInformation = "Default Context not updated.\n";
        if(res.makeDefault == "Yes") {
          additionalInformation = "Default Context updated.\n";
          // Update all existing context entries to false
          await Context.update({ isDefaultContext: false }, {
            where: {
              isDefaultContext: true
            }
          });
          // Set the user selected context to the default context
          await Context.update({ isDefaultContext: true }, {
            where: {
              context: userContext
            }
          });
        }    
        this.log(`${additionalInformation} \nConfiguration complete ${new Date()}`);   
      });
    } 
    else { // Regular Configuration
      this.log(`Configure will provide utility to: \n - sync API Gateway Secret Key to a context\n - allow for setting a default context \n - regenerate API Gateway Secret Key`);
      const source = await Context.findAll(); 
      const choices = source // make a copy of the source
      const yesNoChoices = ['Yes','No']
      const questions = [
        {
          type: 'list',
          message: 'Please select a Context',
          name: 'context',
          default: choices[0],
          choices: choices.map(item => {
            // the default checked value is determined by the status of todo
            return { name: item.context }
          })
        },
        {
          type: 'list',
          name: 'makeDefault',
          message: 'Would you like to make this the default Context?',
          default: yesNoChoices[1],
          choices: yesNoChoices
        },
        {
          type: 'list',
          name: 'overwriteCredential',
          message: 'Would you like to regenerate API Gateway Credential for this Context?',
          default: yesNoChoices[1],
          choices: yesNoChoices
        }
      ];
      let userContext = "";
      let userSecretKey = "";
      const prompt : any = await inquirer.prompt(questions)
      .then(async answers => {
        let res: any = answers;
        userContext = res.context;
        let additionalInformation = "Default Context not updated.\n";
        // Update default context
        if(res.makeDefault == "Yes") {
          additionalInformation = "Default Context updated.\n";
          // Update all existing context entries to false
          await Context.update({ isDefaultContext: false }, {
            where: {
              isDefaultContext: true
            }
          });
          // Set the user selected context to the default context
          await Context.update({ isDefaultContext: true }, {
            where: {
              context: userContext
            }
          });
        }
        // Get the Context to use api gateway admin url
        let currentContext = await Context.findOne({ where: {context: userContext}});
        let kongOpenApiConfig = new OpenApiConfigBuilder().CreateOpenApiConfig(currentContext!.dataValues.apiGatewayAdminUrl);
        // get the user account from login session
        let loginSession = await LoginSession.findOne();
        if(!loginSession!.dataValues) {
          this.log(`Please login before continuing with mango-cli login`);
          return;
        }
        // Check if the Credential exists in sqlite db thereby skipping creation
        // of 1) consumer, api key
        let existConsumerId = undefined;
        let existCredential = await Credential.findOne({where: { context: userContext }});
        if(existCredential) {
          //console.log(' existCredential ', existCredential)
          existConsumerId = existCredential!.consumerId;
          // Delete the consumer 
        //  let deleteConsumer = await new AuthContext().DeleteConsumer({ id: existConsumerId}, kongOpenApiConfig);
        }
        let username = loginSession!.dataValues.username;
        // // Recreate consumer/credential or get existing credential and resuse
        if(res.overwriteCredential == "Yes") {
          //console.log(' in overwriteCredential is yes ', existConsumerId, ' res ', res)
          // Delete existing credential
          await Credential.destroy({where: {context: userContext}});
          let deleteConsumer = await new AuthContext().DeleteConsumer({ id: existConsumerId!}, kongOpenApiConfig);
          // Go to Kong to Create Consumer/User if it does not yet exist
          let createUser: any = new AuthContext().CreateConsumer({ username: username }, kongOpenApiConfig)
          .then(res => {
            let consumerResponse = res as any;
            // Go to Kong to Create API Key
            //console.log(`resp ${consumerResponse.id}`);
            let createApiKey: any = new AuthContext().CreateApiKey({ username: username }, kongOpenApiConfig).then(async res2 => {          
              let apiKeyResult = res2 as any;
              // Create new cred/context entry
              await Credential.create({secretKey: apiKeyResult.key, context: userContext, consumerId: consumerResponse.id});
              additionalInformation += `Secret Key saved for context ${userContext}, username: ${username} key: ${apiKeyResult.key}`;
              });
            });  
        }
        if(res.overwriteCredential == "No") {
          //console.log(' in overwriteCredential is no ', existConsumerId, ' res ', res)
          // // Check if the consumer already exists in Kong Admin API, reuse token if it exists
          let existConsumer = await new AuthContext().GetConsumer({ id: existConsumerId!}, kongOpenApiConfig) as any;
          let existingApiKeyResult = await new AuthContext().GetApiKey({ username: username}, kongOpenApiConfig) as any;
          let existingApiKey = existingApiKeyResult.data[0].key;
          //console.log('existingApiKey ',existingApiKey)
          if(existConsumer == "Not Found") {
            //console.log('existConsumer in not found',existConsumer);
          } else {
            //console.log('existConsumer found',existConsumer);
            await Context.update({ isDefaultContext: false }, {
              where: {
                isDefaultContext: true
              }
            });
            await Credential.update(
              {
                secretKey: existingApiKey,
              }, 
              { 
                where: { id: existConsumer.id}
              }
            );
            additionalInformation += ` Secret Key saved for context ${userContext}, username: ${username} key: ${existingApiKey}`;
          }
        }
        
        // Go to Kong to Create Consumer/User if it does not yet exist
        //let username = loginSession!.dataValues.username;
        // let createUser: any = new AuthContext().CreateConsumer({ username: username }, kongOpenApiConfig)
        // .then(res => {
        //   let consumerResponse = res as any;
        //   // Go to Kong to Create API Key
        //   //console.log(`resp ${consumerResponse.id}`);
        //   let apiGatewayId = consumerResponse.id;
        //   let createApiKey: any = new AuthContext().CreateApiKey({ username: username }, kongOpenApiConfig).then(async res2 => {          
        //     let apiKeyResult = res2 as any;
        //     // // Delete existing credential
        //     await Credential.destroy({where: {context: userContext}});
        //     // Create new cred/context entry
        //     await Credential.create({secretKey: apiKeyResult.key, context: userContext, consumerId: apiGatewayId});
        //     additionalInformation += `Secret Key saved for context ${userContext}, username: ${username} key: ${apiKeyResult.key}`;
        //     });
        //   });        
        this.log(`${additionalInformation} \nConfiguration complete ${new Date()}`);
      });
    }
  }
}
