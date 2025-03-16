//import model
const Post=require('../models/postModel');
const Comment=require('../models/commentModel');

//business logic
exports.createComment = async(req,res) =>{
    try{
        //fetch data from req ka body

        const {post, user, body}=req.body;

        //create a comment object
        const comment = new Comment({
            post, user, body
        })

        //save the object in database
        const savedComment= await comment.save();

        //find post
        //push to update new value add new value and pull to delte the value
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
        .populate('comments')
        .exec()
        //new true se updated document ayega

        res.json(
            {
                post:updatedPost
            }
        )

    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating comment:"+error
        })
    }
}