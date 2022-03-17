/**
 * 
 import { Sequelize } from "sequelize";

interface ConnectionConfiguration {
    name: string;
    user: string;
    host: string;
    password: string;
}

export default async (configuration: ConnectionConfiguration) => {
    const sequelize = new Sequelize(configuration.name, configuration.user, configuration.password, {
        host: configuration.host,
        dialect: "mysql",
        define: {
            timestamps: false,
            freezeTableName: true
        },
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
            },
        logging: (...msg) => console.info(msg)
    });

    await sequelize.authenticate();
    return sequelize;
};
 * 
 */

/*import getDbConnection  from "./mysql/connection";

async function getFooDbName() {
    return { 
        name: process.env.DB_NAME as string,
        user: process.env.DB_USER as string,
        host: process.env.DB_HOST as string,
        password: process.env.DB_PASSWORD as string,
        
    };
}

export default getFooDbName().then(db => getDbConnection(db));*/
