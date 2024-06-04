const {Schema,model}=require("mongoose");
const serviceSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
},{timestamps:true}
);
const Service=model('services',serviceSchema)
module.exports=Service;