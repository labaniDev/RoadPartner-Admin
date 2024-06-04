const {Schema,model}=require("mongoose");
const categorySchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
},{timestamps:true}
);
const Category=model('category',categorySchema)
module.exports=Category;