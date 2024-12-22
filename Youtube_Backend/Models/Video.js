import mongoose from "mongoose"

const videoSchema = new mongoose({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true
        
    },
    description:{
        type:String,
    },
    videoLink:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
},{timestamps:true})

export const video = mongoose.model('Video', videoSchema)