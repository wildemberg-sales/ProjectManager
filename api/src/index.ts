import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import routes from './routes'
import { AppDataSource } from './database/data-source'

AppDataSource.initialize().then(()=>{
    dotenv.config();
    const app = express();
    const PORT = 4000;

    app.use(cors({
        origin:'*',
        optionsSuccessStatus: 200,
        credentials: true
    }))
    app.use(cookieParser());
    app.use(express.json())
    app.use(routes)

    return app.listen(PORT, ()=>{
        console.log(`Servidor Rodando no endereço http://localhost:${PORT}`)
    })
    
}).catch((err)=>{
    console.log(err)
})
