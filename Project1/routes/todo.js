const express=require('express');

const router=express.Router();

//import controller
const {createToDo}=require('../controllers/createToDo');
const {getToDo,getToDoById}=require('../controllers/getToDo');
const {updateToDo}=require('../controllers/updateToDo')
const {deleteToDo}=require('../controllers/deleteToDo')
//define api routes
router.post("/createToDo",createToDo);
router.get("/getToDo",getToDo)
router.get("/getToDo/:id",getToDoById)

router.put("/updateToDo/:id",updateToDo)
router.delete("/deleteToDo/:id",deleteToDo)
module.exports = router;