const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');


const User = require('../models/user');
const Order = require('../models/order');
const Option = require('../models/option');
const Menu = require('../models/menu');
const Spa = require('../models/spa');
const Orderplaced = require('../models/orderplaced');
// const users = [];

// routers
router.post('/register',(req,res,next)=>{
	let newUser = new User({
		name: req.body.Username,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
    PhoneNo  :req.body.PhoneNo,
    RegistrationNo  :req.body.RegistrationNo,
    RoomNo  :req.body.RoomNo
	});
  console.log(this.newUser);

	User.addUser(newUser, (err, user)=>{
		if(err){
			res.json({success:false, msg:'Failed to register user '+newUser.name});
		}else{
			res.json({success:true, msg:'User Registered'});
		}
	})


	// res.send("register");
});

router.post('/addorder',(req,res,next)=>{
  let newOrder= new Order({
    count: req.body.count,
    orders: req.body.orders
  });
  // console.log(this.newOrder.count);
  console.log("its here in post" +newOrder);

  Order.addOrder(newOrder,(err, order)=>{
    if(err){
      res.json({success:false, msg:'Failed to add order '+newOrder.count});
    }else{
      res.json({success:true, msg:'Order Added'});
    }
  })
});


router.post('/addmenuitem',(req,res,next)=>{
  let newMenuItem= new Menu({
    cuisine: req.body.cuisine,
    FoodType: req.body.FoodType,
    ItemName: req.body.ItemName,
    ItemPrice: req.body.ItemPrice
  });
  // console.log(this.newOrder.count);
  console.log("its here in post" +newMenuItem);

  Menu.addmenuitem(newMenuItem,(err, menu)=>{
    if(err){
      res.json({success:false, msg:'Failed to add menu '+newMenuItem.ItemName});
    }else{
      res.json({success:true, msg:'Menu Added'});
    }
  })
});


router.post('/addspadeal',(req,res,next)=>{
  let newspadeal= new Spa({
    session: req.body.session,
    duration: req.body.duration,
    price: req.body.price
  });
  console.log(this.newspadeal);

  // console.log(this.newOrder.count);
  console.log("its here in post" +newspadeal  );

  Spa.addspadeal(newspadeal,(err, spa)=>{
    if(err){
      res.json({success:false, msg:'Failed to add Spa Deal '+newspadeal.session});
    }else{
      res.json({success:true, msg:'Spa Deal Added'+newspadeal.session});
    }
  })
});


router.post('/addordereditem',(req,res,next)=>{
  let newOrderplaced= new Orderplaced({
    ItemName: req.body.ItemName,
    UserName: req.body.UserName,
    Description: req.body.Description,
    status: req.body.status,
    price: req.body.price
  });
  console.log(this.newOrderplaced);

  // console.log(this.newOrder.count);
  console.log("its here in post" +newOrderplaced  );

  Orderplaced.addordereditem(newOrderplaced,(err, newOrderplaced)=>{
    if(err){
      res.json({success:false, msg:'Failed to placed order # '+newOrderplaced.ItemId});
    }else{
      res.json({success:true, msg:'Order Placed, #'+newOrderplaced.ItemId});
    }
  })
});



// auth
router.post('/authenticate',(req,res,next)=>{
	const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }
    User.comparePassword(password, user.password, (err, isMatch) => {

      if(err) throw err;
      if(isMatch){
        
        const token = jwt.sign(user.toObject(), config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
  });


// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

router.get('/getorders',  (req, res, next) => {
  Order.getOrders((err, order)=>{
    // return res.json({success: true, msg: 'orders'});
    return res.json(order);

  });
});

router.get('/getusers',  (req, res, next) => {
  User.getUsers((err, user)=>{
    // return res.json({success: true, msg: 'orders'});
    return res.json(user);

  });
});

router.get('/getUserById',  (req, res, next) => {
  User.getUserById((err, user)=>{
    // return res.json({success: true, msg: 'orders'});
    return res.json(user);

  });
});

router.get('/getplacedorders',  (req, res, next) => {
  Orderplaced.getPlacedOrders((err, ordersplaced)=>{
    // return res.json({success: true, msg: 'orders'});
    return res.json(ordersplaced);

  });
});

router.get('/getmenus',  (req, res, next) => {
  Menu.getMenus((err, menu)=>{
    // return res.json({success: true, msg: 'orders'});
    return res.json(menu);

  });
});


router.get('/getoptions',  (req, res, next) => {
  Option.getOptions((err, order)=>{
    // return res.json({success: true, msg: 'orders'});
    return res.json(order);

  });
});


router.get('/getspadeals',  (req, res, next) => {
  Spa.getSpadeals((err, spadeal)=>{
    // return res.json({success: true, msg: 'orders'});
    return res.json(spadeal);

  });
});




module.exports = router;
