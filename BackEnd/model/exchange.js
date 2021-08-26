const mongoose = require("mongoose");

const exchangeSchema = mongoose.Schema({
  uid:String,
  type: String,
  category:String,
  value:Number,
  date:String,
  descrpiton:String
  
});

module.exports = mongoose.model("exchange", exchangeSchema);