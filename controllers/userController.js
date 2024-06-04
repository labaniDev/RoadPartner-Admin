const User = require("../models/user");

const userController={
    getUsers: async (req, res) => {
        try {
          const users = await User.find({});
          res.send(users);
        } catch (error) {
          res.send(error).send({ success: false, msg: error.message });
        }
      },


    
    
}

    

module.exports=userController;
