const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const OrderPlacedSchema = mongoose.Schema({
  
  "ItemName":{
    type: String
  },
  "UserName":{
    type: String
  },
  "Description":{
    type: String
  },
  "price":{
    type: Number
  },
  "status":{
    type: String
  }

});

const Orderplaced = module.exports = mongoose.model('Orderplaced', OrderPlacedSchema);

module.exports.getPlacedOrderById = function(id, callback){
  Orderplaced.findById(id, callback);
}

module.exports.getPlacedOrders = function(callback){
  Orderplaced.find(callback);
}

module.exports.addordereditem = function(newOrderplaced, callback){
  console.log("its here in export"+newOrderplaced);
  		
      newOrderplaced.save(callback);
    
}


