import dotenv from 'dotenv'
import mysql from 'mysql'
import { getCarteraByTercero, getToken } from './actions/karing'
import env from './config/env'

dotenv.config()

/* const connection = mysql.createConnection({
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
        const tercerosCarteraData = results.slice(0, 1).map(
            ({ identificacion }: { identificacion: number }) => {
                getCarteraByTercero(identificacion).then(cartera => {
                    console.log()
                    return cartera
                })
            }
        )
        console.log(tercerosCarteraData)
    }
)

connection.end() */

getCarteraByTercero(12553152)
