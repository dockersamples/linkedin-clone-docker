import mongoose from 'mongoose'



const linkedInPosts = new mongoose.Schema({
    username: String,
    description: String,
    message: String  , 
    userImage: String,
    email: String
    

})



export default mongoose.model("linkedInPosts", linkedInPosts)



