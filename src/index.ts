import dotenv from 'dotenv'
import mysql from 'mysql'
import { getToken } from './actions/karing'
import env from './config/env'

dotenv.config()

const connection = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
})

connection.connect()

connection.query(
    'SELECT identificacion FROM ter_terceros',
    function (error, results, fields) {
        if (error) throw error
        console.log(results[0])
    }
)

connection.end()
