const express=require('express');

const app=express();
require('dotenv').config();
const PORT=process.env.PORT || 3000;

app.get('/',(req,res)=>{

    res.send("<h1>This is harsh</h1>")
})


//middleware

app.use(express.json());

//mount URL
const blog=require('./routes/blog');
app.use("/api/v1",blog);

const connectWithDB=require('./config/database');
connectWithDB();

app.listen(PORT,()=>{
    console.log("App is successfully running on " + PORT)
})
