const AdminUser = require("../models/adminUser.js");
const adminUserController={
    userHome:(req,res)=>{
        res.render("home");
    },
    signup :async (req,res)=>{
        const{name,email,password,conpassword}=req.body;
        await AdminUser.create({
            name,email,password,conpassword
        })
        .then(user=>res.json(user))
        .catch(err=>res.json(err));
        
    },

    login:async(req,res)=>{
       const{email,password}=req.body;
       try {
        const token=await AdminUser.matchPasswordAndGenerateToken(email,password);
        return res.json("sucess")
        
       } catch (error) {
        return res.json(error);
       }
    },

    logout:async(req,res)=>{
        res.clearCookie("token").redirect("/");
    },
    
    
}

    

module.exports=adminUserController;
