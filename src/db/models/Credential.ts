import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config'

interface CredentialAttributes {
    id: number;
    context: string;  
    secretKey: string;
    consumerId: string;
  }

  export interface CredentialInput extends Optional<CredentialAttributes, 'id'> {}
  export interface CredentialOuput extends Required<CredentialAttributes> {}

class Credential extends Model<CredentialAttributes, CredentialInput> implements CredentialAttributes {
    public id!: number
    public context!: string
    public secretKey!: string
    public consumerId!: string
  
    // // timestamps!
    // public readonly createdAt!: Date;
    // public readonly updatedAt!: Date;
    // public readonly deletedAt!: Date;

  }

  Credential.init(
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
        secretKey: {
            type: DataTypes.STRING,
          allowNull: false
        },
        consumerId: {
            type: DataTypes.STRING,
          allowNull: false
        },
    },
    {
        timestamps: false,
        sequelize: sequelizeConnection,
        paranoid: true
      }
)

  export default Credential