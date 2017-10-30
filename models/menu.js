const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const MenuSchema = mongoose.Schema({
  "cuisine": {
    type: String
  },
  "FoodType": {
    type: String
  },
  "ItemName":{
    type:String
  },
  "ItemPrice":{
    type:Number
  }
});

const Menu = module.exports = mongoose.model('Menu', MenuSchema);

// module.exports.getOrderById = function(id, callback){
//   Order.findById(id, callback);
// }

// module.exports.getOrders = function(callback){
//   Order.find(callback);
// }

module.exports.addmenuitem = function(newMenuItem, callback){
  console.log("its here in export"+newMenuItem);
  		
      newMenuItem.save(callback);
    
}



module.exports.getMenus = function(callback){
  Menu.find(callback);
}
