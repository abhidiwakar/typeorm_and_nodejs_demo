import path from "path";
import { DataSource } from "typeorm";

const entitiesPath = path.resolve(__dirname, "./entity") + "/*.ts";
const migrationsPath = path.resolve(__dirname, "./migration") + "/*.ts";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "typeorm_demo_db",
    synchronize: process.env.NODE_ENV !== "production",
    logging: process.env.NODE_ENV !== "production",
    entities: [entitiesPath],
    migrations: [migrationsPath],
})