const mongoose=require('mongoose');

require('dotenv').config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("Connection successfull for HarshPlays")})
    .catch((error)=>{console.log(error)

        //iska matlab ky?
        process.exit(1);
    })

}

module.exports=dbConnect;