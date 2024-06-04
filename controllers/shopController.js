const Shop = require("../models/shop.js");
const shopController={
    addShops :async (req,res)=>{
        const{name,stateName,cityName,countryName,mobileNumber,serviceName}=req.body;
        const image=req.file.filename;
        await Shop.create({
            name,stateName,cityName,countryName,mobileNumber,serviceName,image
        })
        .then(shop=>res.json(shop))
        .catch(err=>res.json(err));
        
    },

    
}

    

module.exports=shopController;
