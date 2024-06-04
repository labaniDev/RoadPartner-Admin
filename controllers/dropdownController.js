const Service = require("../models/services");
const Country = require("../models/country");
const State = require("../models/state");
const City = require("../models/city");
const Shop = require("../models/shop");

const dropdownController = {
  getServices: async (req, res) => {
    try {
      const services = await Service.find({});
      res.send(services);
    } catch (error) {
      res.send(error).send({ success: false, msg: error.message });
    }
  },
  getCountries: async (req, res) => {
    try {
      const countries = await Country.find({});
      res.send(countries);
    } catch (error) {
      res.send(error).send({ success: false, msg: error.message });
    }
  },
  getStates: async (req, res) => {
    try {
      let { country } = req.params;
      let states = await State.find(
        { countryName: { $regex: country, $options: "i" } },
        {
          name: 1,
          countryName: 1,
        }
      );
      res.send(states);
    } catch (error) {
      res.send(error).send({ success: false, msg: error.message });
    }
  },
  // getStates :async (req,res)=>{
  //     try{
  //         if(req.body.country==undefined || req.body.country==""){
  //             res.send({success:false,msg:"Data not found",data:[]});
  //         }else{
  //             const states=await State.find({countryName:req.body.country});
  //             res.send({success:true,data:states});
  //         }
  //     }catch(error){
  //         res.send(error).send({success:false,msg:error.message});
  //     }
  // },
  getCities: async (req, res) => {
    try {
      let { state } = req.params;
      let cities = await City.find(
        { stateName: { $regex: state, $options: "i" } },
        {
          name: 1,
          stateName: 1,
        }
      );
      res.send(cities);
    } catch (error) {
      res.send(error).send({ success: false, msg: error.message });
    }
  },
  // getShops: async (req, res) => {
  //   try {
  //     let { country } = req.params;
  //     let shops = await Shop.find(
  //       {
  //         countryName: { $regex: country, $options: "i" },
  //       },
  //       {
  //         name: 1,
  //         countryName: 1,
  //       }
  //     );
  //     res.send(shops);
  //   } catch (error) {
  //     res.send({ success: false, msg: error.message });
  //   }
  // },
  //
  //
  // getShops: async (req, res) => {
  //   try {
  //     let { service, country, state, city } = req.params;
  //     let shops = await Shop.find(
  //       {
  //         serviceName: { $regex: service, $options: "i" },
  //         countryName: { $regex: country, $options: "i" },
  //         stateName: { $regex: state, $options: "i" },
  //         cityName: { $regex: city, $options: "i" },
  //       },
  //       {
  //         name: 1,
  //         imageURL:1,
  //         serviceName: 1,
  //         countryName: 1,
  //         stateName: 1,
  //         cityName: 1,
  //         mobileNumber: 1,
  //       }
  //     );
  //     res.send(shops);
  //   } catch (error) {
  //     res.send(error).send({ success: false, msg: error.message });
  //   }
  // },
};
module.exports = dropdownController;
