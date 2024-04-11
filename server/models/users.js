import mongoose from "mongoose";
import bcrypt from "bcrypt"

let userRegisterSchema = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address_street: String,
    address_city: String,
    address_state: String,
    address_pin: String,
    dob: String,
    gender: String,
    password: String,
    cpassword: String,
    timeStamp: String,
})

userRegisterSchema.pre("save", async function (next) {

    try {

        console.log("pre method is called before saving user into database !")

        console.log(`original password was ${this.password} `)

        this.cpassword = this.password = await bcrypt.hash(this.password, 10);

        console.log(`hased password is ${this.password} `)

        next()
    }
    catch (err) {
        console.log("Error while pre methods save !")
        console.log(err)
    }
})

let registerUser = mongoose.model("users", userRegisterSchema)


export { registerUser } 