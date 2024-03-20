import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routers/router.js"

dotenv.config({path:"./config.env"})

let port = process.env.PORT || 5002

let app = express()

let corsOptions = {
    origin:process.env.CLIENT,
    Credential:true
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(router)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})