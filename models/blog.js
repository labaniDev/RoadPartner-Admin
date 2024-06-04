const {Schema,model}=require("mongoose");

const blogSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        
    },
    
},{timestamps:true}
);

const Blog=model('blog',blogSchema)

module.exports=Blog;