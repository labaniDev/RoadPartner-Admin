const {Schema,model}=require("mongoose");

const contactUsSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
},{timestamps:true}
);

const ContactUs=model('contactUs',contactUsSchema)

module.exports=ContactUs;