//import mongoose

const mongoose=require('mongoose');


//router
const commentSchema = new mongoose.Schema({

    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" //refernce post ka ID
    },
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
});


//export
module.exports=mongoose.model("Comment",commentSchema);