import express from 'express'
import cookieParser from 'cookie-parser'
import {DataBase} from './configs/DataBase.js'
import authRouter from './routers/auth.router.js'
import movieRouter from './routers/movie.router.js'
import tvRouter from './routers/movie.router.js'
import searchRouter from './routers/search.router.js'
import dotenv from 'dotenv'
import { protectRoute } from './middlewares/protectRouter.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/movie",movieRouter)
app.use("/api/v1/tv",protectRoute,tvRouter)
app.use("/api/v1/search",protectRoute,searchRouter)
app.listen(8090,()=>{
    console.log("Server Strat")
    DataBase()
})

