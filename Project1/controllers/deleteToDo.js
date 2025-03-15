//import the todo

const Todo=require('../models/todo')

//define route handler

exports.deleteToDo=async(req,res)=>{
 try{
        const {id}=req.params
      

        const todo= await Todo.findByIdAndDelete({_id:id})

        if(!todo){
            res.status(404).json({
                success:false,
               
                message:'ID Not Found'
            })
        }
        res.status(200).json({
            success:true,
         
            message:'ID Deleted'
        })


    }
    catch(err){
        res.status(500).json({
            success:false,
        
            message:'Internal Server Error'
        })
    }
};