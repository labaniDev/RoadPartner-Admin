const {Schema,model}=require("mongoose");
const questionAnsSchema=new Schema({
    question:{
        type:String,
        required:true,
    },
    ans:{
        type:String,
        required:true,
    },
    
},{timestamps:true}
);
const QuestionAns=model('questionAns',questionAnsSchema)
module.exports=QuestionAns;