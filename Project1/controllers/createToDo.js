//import the todo

const Todo=require('../models/todo')

//define route handler

exports.createToDo=async(req,res)=>{
    try{
        //extract title and description
        const {title,description}=req.body;

        //create new todo object and insert in db
        const response=await Todo.create({title,description});

        //send json flag with success flag
        res.status(200).json({

            success:true,
            data:response,
            message:'Entry Created Successfully'
        }

        )

    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            data:response,
            message:'Internal Server Error'
        }
    )
    }
};