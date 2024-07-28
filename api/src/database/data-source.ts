import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "project-manager",
	entities: [`${__dirname}/../entities/*.{ts,js}`],
	migrations: [`${__dirname}/../migrations/*.{ts,js}`]
})