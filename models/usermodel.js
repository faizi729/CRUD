import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },address:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true,
        unique:true
    }
})

export default mongoose.model("users",userSchema)