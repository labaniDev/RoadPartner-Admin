const {createHmac,randomBytes}=require("crypto");
const {Schema,model}=require("mongoose");
const { createTokenForUser } = require("../services/authentication");

const adminUserSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    
    password:{
        type:String,
        required:true,
    },
    conPassword:{
        type:String,
        
    },
    
    //password hashing
    salt:{
        type:String,
        
    },
    
},{timestamps:true}
);



adminUserSchema.pre('save',function (next){
    const adminUser=this;

    if(!adminUser.isModified("password")) return;

    //here we will use hash
    const salt=randomBytes(16).toString();
    const hashedPassword = createHmac('sha256',salt) //algorithm-sha256 and key-salt
    .update(adminUser.password)
    .digest("hex");

    this.salt=salt;
    this.password=hashedPassword;

    next();
});


adminUserSchema.static('matchPasswordAndGenerateToken', 
   async function(email,password){
    
    const adminUser=await this.findOne({email});
    if(!adminUser) throw new Error ('User not found!');

    const salt=adminUser.salt;
    const hashedPassword=adminUser.password;

    const userProvidedHash=createHmac("sha256",salt)
      .update(password)
      .digest("hex");

    if(hashedPassword!==userProvidedHash)
     throw new Error ('Invalid Username or Password');
    const token=createTokenForUser(adminUser);
    return token;
});
const AdminUser=model('adminUser',adminUserSchema);


module.exports=AdminUser;