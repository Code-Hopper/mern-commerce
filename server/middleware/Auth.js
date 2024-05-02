import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { registerUser } from "../models/users.js"

dotenv.config("./config.env")

let Auth = async (req, res, next) => {
    try {
        console.log("Auth Backend !")
        let token = req.headers.authorization

        let secret_key=process.env.SECRETKEY

        let result = await jwt.verify(token,secret_key)

        // console.log(result)

        let userData = await registerUser.findOne({email:result.user})
        
        req.userData = userData

        next()
    }catch(err){
        console.log("unable to verify token !")
        console.log(err)
        res.status(401).json({message:"unable to verify user !"})
    }
}

export { Auth }