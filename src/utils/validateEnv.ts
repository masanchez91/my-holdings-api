import { cleanEnv, port, str } from "envalid";

function validateEnv() {
    cleanEnv(process.env, {
        JWT_SECRET: str(),
        PORT: port(),
        DB_HOST: str(),
        DB_NAME: str(),
        DB_USER: str(),
        DB_PASSWORD: str(),
    });
}

export default validateEnv;