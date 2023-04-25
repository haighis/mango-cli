import {Args, Command, Flags} from '@oclif/core'
import { Sequelize }from 'sequelize';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import Context, { ContextInput } from '../db/models/Context';
import Credential, { CredentialInput } from '../db/models/Credential';
import sequelizeConnection from '../db/config';
import LoginSession from '../db/models/LoginSession';
import { SetupService } from '../client/services/SetupService';
import { Label, OpenAPIConfig } from '../client';
import AuthContext from '../AuthContext';
export default class Setup extends Command {
  static description = 'Utility to Setup Mango Platform CLI & API Server'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {    
    recreate_database: Flags.boolean({char: 'r', description: 'Recreate Mango CLI database. VOLATILE operation. This will delete your local Mango Platform CLI configuration.'}),
    cli: Flags.boolean({char: 'c', description: 'Setup Mango Platform CLI'}),
    api: Flags.boolean({char: 'a', description: 'Setup Mango Platform API Server'})
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Setup)
    // Create/Initialize Mango Platform CLI Database
      try {
        if(flags.recreate_database) {
          await this.initDatabase(true);
          this.log('Mango Platform CLI successfuly created.');
        } else {        
          if(flags.cli) {
            await this.initDatabase(false);
            this.log('Mango Platform CLI successfuly created.');
          }
        }     
      } catch (error) {
        this.error(`Unable to create the database: ${error}`);
      }
      if(flags.api){
        let authConext = new AuthContext();
        let openApiConfig = await authConext.buildOpenApiConfig();
        if(!openApiConfig) {
          return;
        }
        try {
          let apiServerResult:Label = await new SetupService(openApiConfig).postSetup({name:"",kind:"",namespace:""});
          this.log(`Mango Platform API Server setup is complete.`)
        } catch(error) {
          if(error == "Bad Request") {
            this.log(`Mango Platform API Server setup is complete.`)
          }
          this.log(`Mango Platform API Server setup can only be executed once. Setup complete`)
          //this.error(`Error during setup of API: ${error}`);
        }
      }
  }
  async initDatabase(rebuildTables: boolean) {
    Context.sync({ alter: rebuildTables });     
    Credential.sync({ alter: rebuildTables }); 
    LoginSession.sync({ alter: rebuildTables });     
  }
}
