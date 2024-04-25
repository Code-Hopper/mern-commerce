import "../database/conn.js"
import bcrypt from "bcrypt"
import { genrateToken } from "../middleware/GenerateToken.js"

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

let userRegister = async (req, res) => {
    console.log(req.body)

    // check email for already registered users

    try {

        let exists = await registerUser.find({ email: req.body.email })

        console.log(exists)

        if (exists != 0) {
            console.log("user already exists in database !")
            res.status(300).json({ message: "unable to register", reason: "user already exists !" })
        } else {

            let newUser = new registerUser(req.body)

            let result = await newUser.save()

            if (result) {
                console.log("user registred in database successfully !")
                res.status(202).json({ message: "user registred in database successfully " })
            }

        }
    } catch (err) {
        console.log("error while register backend")
        console.log(err)
    }
}

let userLogin = async (req, res) => {

    console.log(req.body)

    let { email, password } = req.body

    try {

        // check if user is registred or not using email

        let exists = await registerUser.findOne({ email: email })

        if (!exists) {
            console.log("not exists !")
            res.status(200).json({ message: "user not found please register the user first !" })
        } else {
            // compare id and password with database id and password               

            // 1. email exits
            // 2. compare email id and password
            // 3. email and password(encrypted)
            // 4. compare password(encrypted) with password that is provided from login Form
            // code for compare encrypted password in unencrypted

            console.log(exists.password)

            let isLogin = await bcrypt.compare(password, exists.password)

            if (!isLogin) {
                console.log("wrong password")
                res.status(200).json({ message: "Email or Password is Invalid !" })
            } else {
                console.log("right password")
                // genrate a token to make a successfully session

                // we can crete a token here also or else use a middleware

                let token = await genrateToken(email)

                console.log("token is : ", token)

                // save genrated token into database of the user using updateOne method

                let saveToken = await registerUser.updateOne({ "email": email }, { $push: { "token": token } })

                console.log(saveToken)

                res.status(202).json({ message: "login was successful !", user: exists, token })

            }

        }

    } catch (err) {
        console.log("err while login backend !")
        console.log(err)
    }

}

let account = async (req, res) => {
    try {


        console.log("Welcome User !")
        console.log(req.userData)

        res.status(200).json({ message: "login success !", user: req.userData })

    } catch (err) {
        console.log("err while loading account page from backend !")
        console.log(err)
        res.status(401).json({ message: "login unsuccess !" })
    }

}

export { test, validateAdmin, userRegister, userLogin, account }