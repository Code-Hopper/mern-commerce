import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({ path: "./config.env" })

let conn = async () => {

    try {

        let connection = await mongoose.connect(process.env.MONGODB_CON_STRING)

        console.log(`connection was successfull !`)

    } catch (err) {
        console.log(`Connection was unsuccessfull : ${err}`)
    }
}

conn();