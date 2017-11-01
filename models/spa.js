const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const SpaSchema = mongoose.Schema({
  "session": {
    type: String
  },
  "duration": {
    type: String
  },
  "price":{
    type:Number
  }
});

const Spa = module.exports = mongoose.model('Spa', SpaSchema);

// module.exports.getOrderById = function(id, callback){
//   Order.findById(id, callback);
// }

// module.exports.getOrders = function(callback){
//   Order.find(callback);
// }

// module.exports.addOrder = function(newOrder, callback){
//   console.log("its here in export"+newOrder);
  		
//       newOrder.save(callback);
    
// }

module.exports.addspadeal = function(newspadeal, callback){
  console.log("its here in export"+newspadeal);
      
      newspadeal.save(callback);
    
}


module.exports.getSpadeals = function(callback){
  Spa.find(callback);
}