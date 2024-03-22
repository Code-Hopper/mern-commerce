import mongoose from "mongoose";

let adminSchema = mongoose.Schema({
    userId: 'string',
    password: 'string'
})

let admin = mongoose.model("admins", adminSchema)

export { admin } 