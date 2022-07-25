import { DataSource } from 'typeorm'
import env from './config/env'
import { Tercero } from './entities/Tercero'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: env.DB_HOST,
    port: 3306,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [Tercero],
    subscribers: [],
    migrations: [],
})
