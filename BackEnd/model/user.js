const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  nic: String,
  name: String,
  email:String,
  password:String
});

module.exports = mongoose.model("user", usersSchema);