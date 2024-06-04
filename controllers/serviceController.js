const Service = require("../models/services.js");
const serviceController={
    addService :async (req,res)=>{
        const name =req.body;
        await Service.create({
            name
        })
        .then(services=>res.json(services))
        .catch(err=>res.json(err));
        
    },
    
}

    

module.exports=serviceController;
