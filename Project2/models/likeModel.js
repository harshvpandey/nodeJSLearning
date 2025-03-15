const mongoose=require('mongoose');


const likeSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" //reference ID of post
    },
    like:{
        type:String,
        required:true
    }
})

//export
module.exports=mongoose.model("Like",likeSchema);