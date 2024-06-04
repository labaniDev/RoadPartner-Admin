const QuestionAns = require("../models/questionAns.js");
const qasController={
    addQas :async (req,res)=>{
        const{question,ans}=req.body;
        await QuestionAns.create({
            question,ans
        })
        .then(user=>res.json(user))
        .catch(err=>res.json(err));
        
    },

    // login:async(req,res)=>{
    //    const{email,password}=req.body;
    //    try {
    //     const token=await adminUser.matchPasswordAndGenerateToken(email,password);
    //     return res.json("sucess")
        
    //    } catch (error) {
    //     return res.json(error);
    //    }
    // },

    // logout:async(req,res)=>{
    //     res.clearCookie("token").redirect("/");
    // },
    
}

    

module.exports=qasController;
