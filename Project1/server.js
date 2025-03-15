
//sever initilization
const express=require('express');
const app=express();


const bodyParser=require('body-parser');

app.use(bodyParser.json());
//sever listening
app.listen(3015,()=>{
    console.log('Server started at port 3007')
});

//routes
// app.get('/',(req,res)=>{
//     res.send("Harsh is great")
// });

// app.post('/api/cars',(req,res)=>{
//     const {name,brand}=req.body;
//     console.log(name);
//     console.log(brand);
//     res.send("Car submitted successfully");
// })

// const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/cars')
// .then(()=>{console.log("Connection successfull")})
// .catch((error)=>{console.log(error)})