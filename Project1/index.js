const express=require('express');
const app=express();

//load config from env file
require('dotenv').config();

const PORT=process.env.PORT || 4000;

//middleware to parse json request body

app.use(express.json());

//import routes for todo API
const todoRoutes=require('./routes/todo')

//mount the todo ASPI ROUTES

app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log("Server started at port "+PORT)
})

//connect to database
const dbConnect=require("./config/database");
dbConnect();

//default route
app.get('/',(req,res)=>{
    res.send("This is working successfully");
})