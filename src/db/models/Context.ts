import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config'

interface ContextAttributes {
    id: number;
    context: string;  
    loginApiServerUrl: string;
    apiServerUrl: string;
    apiGatewayAdminUrl: string;
    isDefaultContext: boolean;
  }

  export interface ContextInput extends Optional<ContextAttributes, 'id'> {}
  export interface ContextOuput extends Required<ContextAttributes> {}

class Context extends Model<ContextAttributes, ContextInput> implements ContextAttributes {
    public id!: number
    public context!: string
    public loginApiServerUrl!: string
    public apiServerUrl!: string
    public apiGatewayAdminUrl!: string
    public isDefaultContext!: boolean
  
    // // timestamps!
    // public readonly createdAt!: Date;
    // public readonly updatedAt!: Date;
    // public readonly deletedAt!: Date;

  }

Context.init(
    {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        context: {
          type: DataTypes.STRING,
          allowNull: false
        },
        loginApiServerUrl: {
          type: DataTypes.STRING,
        allowNull: false
      },
        apiServerUrl: {
            type: DataTypes.STRING,
          allowNull: false
        },
        apiGatewayAdminUrl: {
          type: DataTypes.STRING,
        allowNull: false
      },
        isDefaultContext: {
            type: DataTypes.BOOLEAN,
            allowNull: false
          },
    },
    {
        timestamps: false,
        sequelize: sequelizeConnection,
        paranoid: true
      }
)

  export default Context