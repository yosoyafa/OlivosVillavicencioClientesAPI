import dotenv from 'dotenv'
import { Tercero } from './entities/Tercero'
import { AppDataSource } from './data-source'

dotenv.config()

const tercerosRepository = AppDataSource.getRepository(Tercero)
tercerosRepository.find().then((allTerceros) => console.log(allTerceros))
