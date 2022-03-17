import { Sequelize } from "sequelize";

const name = process.env.DB_NAME as string;
const user = process.env.DB_USER as string;
const host = process.env.DB_HOST as string;
const password = process.env.DB_PASSWORD as string;

const databaseConnection = new Sequelize(name, user, password, {
    host: host,
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

export default databaseConnection;