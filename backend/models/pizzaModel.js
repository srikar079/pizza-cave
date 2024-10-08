const mongoose= require('mongoose');

const pizzaSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    varients: [],
    
    prices:[],
    
    category:{
        type:String,
        required:true
    },
      image:{
        type:String,
        required:true
      }
},
{tumestamps:true}
)


const pizzaModel=mongoose.model('pizza',pizzaSchema);
module.exports=pizzaModel;