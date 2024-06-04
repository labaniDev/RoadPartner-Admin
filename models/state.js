const {Schema,model}=require("mongoose");
const stateSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    countryName:{
        type:String,
        required:true,
    },
},{timestamps:true}
);
const State=model('state',stateSchema)
module.exports=State;