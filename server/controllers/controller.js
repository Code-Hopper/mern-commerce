import "../database/conn.js"

// importing admin model to make admin login
import { admin } from "../models/admin.js"
import { registerUser } from "../models/users.js"

let test = (req, res) => {
    console.log("Got a Message from Frontend!")
    res.status(200).json({ message: "Hello From Node Backend !" })
}

let validateAdmin = async (req, res) => {
    let { userId, password } = req.body

    if (!userId || !password) {
        console.log("invalid data for login !")
        res.status(400).json({ "message": "UserID/Password Cannot be Empty !" })
    } else {

        // now validate the admin with id and password stored into database

        let login = await admin.find({ "admin-userId": userId, "admin-password": password })

        console.log(login)

        if (login.length > 0) {
            res.status(202).json({ "message": "admin was successfully loged in !" })
        } else {
            res.status(400).json({ "message": "wrong id or password" })
        }
    }
}

let userRegister = async (req,res) =>{
    console.log(req.body)

    // check email for already registered users

    let exists = await registerUser.find({ email: req.body.email })

    console.log(exists)

    if(exists != 0){
        console.log("user already exists in database !")
        res.status(300).json({message:"unable to register" , reason: "user already exists !"})
    }else{

        let newUser = new registerUser(req.body) 

        let result = await newUser.save()

        if(result){
            console.log("user registred in database successfully !")
            res.status(202).json({message:"user registred in database successfully "})
        }

    }
}

export { test, validateAdmin , userRegister }