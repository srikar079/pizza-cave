//const { bgRed } = require('colors');
const mongoose=require('mongoose');
require('colors')
//const morgan=require('morgan')


const connectDB=async()=>{
    try {
        const url=process.env.MONGO_URI
        const conn=await mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser: true,
        })
        console.log(`mongodb connected ${conn.connection.host}`);
    } catch (error) {
        console.log(`${error.message},nope`)
    }
}

module.exports=connectDB;