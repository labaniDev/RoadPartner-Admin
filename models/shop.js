const { Schema, model } = require("mongoose");
const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      
    },
    serviceName: {
      type: String,
      required: true,
    },
    countryName: {
      type: String,
      required: true,
    },
    stateName: {
      type: String,
      required: true,
    },
    cityName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
     
    },
  },
  { timestamps: true }
);
const Shop = model("shop", shopSchema);
module.exports = Shop;
