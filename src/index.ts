import dotenv from 'dotenv'
import { Tercero } from './entities/Tercero'
import { AppDataSource } from './data-source'

dotenv.config()

AppDataSource.manager.find(Tercero).then(
    (allTerceros) => console.log(allTerceros)
)
