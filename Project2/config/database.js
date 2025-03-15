const mongoose=require('mongoose');

require('dotenv').config();
const connectToDB=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log('Database Connected Successfully'))
    .catch((error)=>{
    console.log('database facing connection issue: '+error);
    process.exit(1);}
    )


}