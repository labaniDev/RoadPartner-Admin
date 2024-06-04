const JWT=require('jsonwebtoken');

const secret="MyRoadRedore2023";

function createTokenForUser(adminUser){
    const payload={
        _id:adminUser._id,
        email:adminUser.email    
    };
    const token=JWT.sign(payload,secret);
    return token;
}


function validateToken(token){
    const payload=JWT.verify(token,secret);
    return payload;
}

module.exports={
    createTokenForUser,
    validateToken,
};