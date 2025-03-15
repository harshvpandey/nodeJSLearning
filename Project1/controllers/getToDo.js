//import the todo

const Todo=require('../models/todo')



exports.getToDo=async(req,res)=>{
    try{
        
        //fetch all todo item from database
        const todos=await Todo.find({});

        //res
        res.status(200).json({

            success:true,
            data:todos,
            message:'Entry ToDo data is fetched'
        }

        )

    }
    catch(err){
        console.error(err);
        res.status(500).json({

            success:false,
            error:err.message,
            message:'Server Error'
        }
    )
    }
};

exports.getToDoById=async(req,res)=>{
    try{

        //get to do by ID
        const id=req.params.id;
        const todoItem=await Todo.findById({_id:id});

        //res
        if(!todoItem){
            res.status(404).json({

                success:false,
              //  data:todoItem,
                message:'Data Not Found'
            }
    
            )
        }
        res.status(200).json({

            success:true,
            data:todoItem,
            message:'Data Found'
        }

        )

    }
    catch(err){
        console.error(err);
        res.status(500).json({

            success:false,
            error:err.message,
            message:'Server Error'
        }
    )
    }
};