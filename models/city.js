const {Schema,model}=require("mongoose");
const citySchema=new Schema({
    name:{
        type:Array,
        required:true,
    },
    stateName:{
        type:String,
        required:true,
    },
},{timestamps:true}
);
const City=model('city',citySchema)
module.exports=City;