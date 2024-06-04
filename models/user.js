const {Schema,model}=require("mongoose");


const userSchema=new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
   
    
    
},{timestamps:true}
);

const User=model('user',userSchema);


module.exports=User;