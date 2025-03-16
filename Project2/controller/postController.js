//import model
const Post=require('../models/postModel');
const Comment=require('../models/commentModel');

//business logic
exports.createPost = async(req,res) =>{
    try{
        //fetch data from req ka body

        const {title,body}=req.body;

        //create a comment object
        const post = new Post({
            title,body
        })

        //save the object in database
        const Savedpost= await post.save();



        res.json(
            {
                post:Savedpost
            }
        )

    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating comment:"+error
        })
    }
}


exports.getAllPosts = async(req,res) =>{
    try{
    
        const posts=await Post.find().populate('comments').exec();
        res.json({
            posts
        })

    }
    catch(error){
        return res.status(500).json({
            error:"Error while getting posts:"+error
        })
    }
}