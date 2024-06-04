const Router = require("express");
const multer=require("multer");
const path=require("path")
const adminUserController = require("../controllers/adminUserController.js");
const blogController = require("../controllers/blogController");
const qasController = require("../controllers/qasController");
const newsController = require("../controllers/newsController.js");
const contactUsController = require("../controllers/contactUsController");
const userController = require("../controllers/userController");
const shopController = require("../controllers/shopController");
const dropdownController = require("../controllers/dropdownController");
const categoryController = require("../controllers/categoryController");
const serviceController = require("../controllers/serviceController.js");


//const contactUsController = require("../controllers/contactUsController");
// const paymentController = require("../controllers/paymentController");
// const dropdownController = require("../controllers/dropdownController");
// const blogController = require("../controllers/blogController");
// const serviceInfoController = require("../controllers/serviceInfoController");
// const questionAnsController = require("../controllers/questionAnsController");
// const categoriesController = require("../controllers/categoriesController");


const adminUser = require("../models/adminUser.js");
//const ContactUs = require("../models/contactUs");
// const Service = require("../models/service");
// const Country = require("../models/country");
// const State = require("../models/state");
// const City = require("../models/city");
// const Shop = require("../models/shop");
// const Blog = require("../models/blog");



const router = Router();

const storage=multer.diskStorage({
    destination:"./public/Images",
    filename:(req,file,cb)=>{
      return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  })
  
  const upload=multer({storage:storage}).single('image');

//POST Routes

router.post("/signup", adminUserController.signup);
router.post("/login", adminUserController.login);
router.post("/add-blog",upload,blogController.addBlog);
router.post("/add-services",serviceController.addService);
router.post("/add-qas",qasController.addQas);
router.post("/add-news",upload,newsController.addNews);
router.post("/add-shops",upload,shopController.addShops);
router.post("/add-categories",upload,categoryController.addCategories);

//router.post("/contactus", contactUsController.contactus);
// router.post("/processPayment", paymentController.processPayment);



//GET Routes

router.get("/get-queries", contactUsController.getQueries);
router.get("/get-users", userController.getUsers);
router.get("/get-services", dropdownController.getServices);
router.get("/get-countries", dropdownController.getCountries);
router.get("/get-states/:country", dropdownController.getStates);
router.get("/get-cities/:state", dropdownController.getCities);

// router.get("/get-countries", dropdownController.getCountries);
// router.get("/get-states/:country", dropdownController.getStates);
// router.get("/get-cities/:state", dropdownController.getCities);
// router.get("/get-shops/:service/:country/:state/:city",dropdownController.getShops);
// router.get("/get-blogs", blogController.getBlogs);
// router.get("/get-serviceinfo", serviceInfoController.getServiceInfo);
// router.get("/get-QAs", questionAnsController.getQAs);
// router.get("/get-categories", categoriesController.getCategories);


//PUT Routes+

module.exports = router;
