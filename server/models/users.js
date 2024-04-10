import mongoose from "mongoose";

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

let registerUser = mongoose.model("users", userRegisterSchema)

export { registerUser } 