import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config("./config.env")

let genrateToken = async (userEmail) => {

    try {

        let screct_key = process.env.SECRETKEY

        let options = {
            expiresIn: '1h'
        }

        let payLoad = {
            user: userEmail
        }

        let token = await jwt.sign(payLoad , screct_key , options)

        return token 

    }catch(err){
        console.log("error while genrating a token !")
        console.log(err)
    }
}

export {genrateToken}