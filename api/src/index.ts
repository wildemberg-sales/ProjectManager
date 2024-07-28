import express from 'express'
import cors from 'cors'
import routes from './routes'
import { AppDataSource } from './database/data-source'

AppDataSource.initialize().then(()=>{
    const app = express()
    const PORT = 4000;

    app.use(express.json())
    app.use(cors())
    app.use(routes)

    return app.listen(PORT, ()=>{
        console.log(`Servidor Rodando no endereço http://localhost:${PORT}`)
    })
    
}).catch((err)=>{
    console.log(err)
})
