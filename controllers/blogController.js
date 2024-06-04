const Blog = require("../models/blog.js");
const blogController={
    addBlog :async (req,res)=>{
        const{title,content}=req.body;
        const image=req.file.filename;
        await Blog.create({
            title,content,image

        })
        .then(blog=>res.json(blog))
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

    

module.exports=blogController;
