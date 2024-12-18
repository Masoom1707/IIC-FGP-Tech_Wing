const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Video',
        required:true
    },
    comment:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports = mongoose.model('Comment',commentSchema)