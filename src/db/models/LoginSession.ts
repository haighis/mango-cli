import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config'

interface LoginSessionAttributes {
    id: number;
    username: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
  }

  export interface LoginSessionInput extends Optional<LoginSessionAttributes, 'id'> {}
  export interface LoginSessionOuput extends Required<LoginSessionAttributes> {}

class LoginSession extends Model<LoginSessionAttributes, LoginSessionInput> implements LoginSessionAttributes {
    public id!: number
    public username!: string
  
    // // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;

  }

  LoginSession.init(
    {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },        
    },
    {
        timestamps: true,
        sequelize: sequelizeConnection,
        paranoid: true
      }
)

  export default LoginSession