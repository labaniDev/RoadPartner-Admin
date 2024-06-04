const News = require("../models/news.js");
const newsController={
    addNews :async (req,res)=>{
        const{title,point1,point2,point3,point4,point5,content1,content2,content3,content4,content5,summary}=req.body;
        const image=req.file.filename;
        await News.create({
            title,point1,point2,point3,point4,point5,content1,content2,content3,content4,content5,image,summary
        })
        .then(news=>res.json(news))
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

    

module.exports=newsController;
