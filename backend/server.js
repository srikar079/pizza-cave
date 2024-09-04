const express=require('express');
//const colors=require('colors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const connectDB=require('./config/config')


//dotenv config
dotenv.config();


//connect to mongodb
connectDB();


const app= express();


//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes'
app.use('/api/pizzas',require('./routes/pizzaRoute'));
app.get('/',(req,res)=>{
    res.send("<h1>nope you suck bro</h1>");
});

const port=process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Server Running On ${port}`);
});
