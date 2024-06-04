const ContactUs = require("../models/contactUs.js");

const contactUsController={
    getQueries: async (req, res) => {
        try {
          const queries = await ContactUs.find({});
          res.send(queries);
        } catch (error) {
          res.send(error).send({ success: false, msg: error.message });
        }
      },


    
    
}

    

module.exports=contactUsController;
