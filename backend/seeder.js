//const mongoose=require('mongoose')
const dotenv=require('dotenv')
require('colors')
const connectDB=require('./config/config')
const Pizza=require('./models/pizzaModel')
const piz=require('./data/pizza-data')

//config env and mongo con fille
dotenv.config()
connectDB()

//import data
const importData= async()=>{
    try {
        await Pizza.deleteMany()
        const sampleData=piz.map(pizza=>{return{...pizza}})        
        await Pizza.insertMany(sampleData)
        console.log('data imported');
        process.exit();
    } catch (error) {
        console.log(`${error}`);
        process.exit(1);
    }
}

const dataDestroy=()=>{}

if(process.argv[2]=== '--d'){
    dataDestroy();
}
else{
    importData();
}