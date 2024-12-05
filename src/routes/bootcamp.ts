import express, {Router} from 'express'
import {getBootcamps} from "../controllers/bootcamp";

const router:Router = express.Router()

router.route('/').get(getBootcamps)

export {router}