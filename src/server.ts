import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import {router as Bootcamps} from "./routes/bootcamp";

dotenv.config({path: "./config/config.env"})

const PORT: number = parseInt(process.env.PORT || '8000', 10);

const app:Express = express()

app.use('/api/v1/bootcamps', Bootcamps)

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))