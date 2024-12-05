import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'

dotenv.config({path: "./config/config.env"})

const PORT: number = parseInt(process.env.PORT || '8000', 10);

const app:Express = express()
