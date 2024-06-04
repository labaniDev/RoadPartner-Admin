const Category = require("../models/category.js");
const categoryController={
    addCategories :async (req,res)=>{
        const{title}=req.body;
        await Category.create({
            title
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

    

module.exports=categoryController;
