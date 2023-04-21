// db/config.ts
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { Sequelize } from 'sequelize'

const databaseFile = path.join(os.homedir(), '.mango-cli', 'mango.sqlite')
    
const sequelizeConnection = new Sequelize({
    logging: false,
    dialect: 'sqlite',
    storage: databaseFile      
});
export default sequelizeConnection