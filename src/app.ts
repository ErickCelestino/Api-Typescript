import express from 'express'

import routes from './routes'

import mongoose from 'mongoose'


require('dotenv').config()

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.database()
        this.middleware()
        this.routes()
    }

    public middleware(): void {
        this.express.use(express.json())
    }

    public async database() {
        try {
            const DB_NAME =  process.env.DB_NAME
            const DB_PASSWORD = process.env.DB_PASSWORD
            
            mongoose.set('strictQuery',true)
            await mongoose.connect(`mongodb+srv://${DB_NAME}:${DB_PASSWORD}@clusteraulas.q7jfnmz.mongodb.net/test`)
        
        } catch (err){
            console.error(`Connect databe fail, error: ${err}`)
        }   
    }

    public routes(): void {
        this.express.use(routes)
    }
}

export default new App().express