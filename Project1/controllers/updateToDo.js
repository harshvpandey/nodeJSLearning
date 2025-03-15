const Todo=require('../models/todo')


exports.updateToDo=async(req,res)=>{
    try{
        const {id}=req.params
        const {title,description}=req.body;

        const todo= await Todo.findByIdAndUpdate({_id:id},{title,description},{updateAt:Date.now()})

        if(!todo){
            res.status(404).json({
                success:false,
               
                message:'ID Not Found'
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:'Updated Successfully'
        })


    }
    catch(err){
        res.status(500).json({
            success:false,
        
            message:'Internal Server Error'
        })
    }
};