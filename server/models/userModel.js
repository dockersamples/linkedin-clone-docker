import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    userImage: String,


})



export default mongoose.model("User", userSchema)