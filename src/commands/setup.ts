import {Args, Command, Flags} from '@oclif/core'
import { Sequelize }from 'sequelize';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import Context, { ContextInput } from '../db/models/Context';
import Credential, { CredentialInput } from '../db/models/Credential';
import sequelizeConnection from '../db/config';
import LoginSession from '../db/models/LoginSession';
import { SetupService } from '../SetupService';
export default class Setup extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {    
    recreate_database: Flags.boolean({char: 'r', description: 'Recreate Mango CLI database. VOLATILE operation. This will delete your local Mango Platform CLI configuration.'})
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Setup)
    // Create/Initialize Mango Platform CLI Database
    try {
      if(flags.recreate_database) {
        await this.initDatabase(true);
      } else {        
        await this.initDatabase(false);
      }     
      //await LoginSession.create({username: 'johntest'});
      this.log('Mango Platform CLI successfuly created.');
    } catch (error) {
      this.error(`Unable to create the database: ${error}`);
    }
    // if (flags.setup) {
      
    //   // let apiServerResult:Label = await SetupService.postSetup({name:"",kind:"",namespace:""})
    //   // this.log(`Mango Platform ${apiServerResult.name} setup is complete.`)
    // }    
  }
  async initDatabase(rebuildTables: boolean) {
    Context.sync({ alter: rebuildTables });     
    Credential.sync({ alter: rebuildTables }); 
    LoginSession.sync({ alter: rebuildTables });     
  }
}
