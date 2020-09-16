const express = require('express');
//const { default: Product } = require('../../src/components/Product');
const router = express.Router();
//const {Product} = require("../models/Product");
const {Cart} = require("../models/Cart");
const { deleteModel } = require('mongoose');


//get method to fetch data from products
router.get('/displayProduct', function(req,res){
  Product.find({})
  .exec(function(err, products){
      if(err) {
          console.log('error')
      }else {
          res.json(products);
      }
  });
});

//get method to fetch data from products
router.get('/display/:id', function(req,res){
  Product.find({_id: req.params.id})
  .exec(function(err, products){
      if(err) {
          console.log('error')
      }else {
          res.json(products);
      }
  });
});

//post method to save data in cart
router.post("/insertCart", (req, res) => {

  //save data got from the client into the carts collection in the DB
  const cart = new Cart(req.body)

      cart.save((err) => {
          if(err) return res.status(400).json({ success: false, err})
          return res.status(200).json({ success: true})
      })
});


//get method to fetch data from cart
router.get('/', function(req,res){
  console.log('Get cart details')
  Cart.find({})
  .exec(function(err, products){
      if(err) {
          console.log('error')
      }else {
          res.json(products);
      }
  });
});

//delete from database
router.post('/delete/:id',function (req,res){
  Cart.deleteOne({_id: req.params.id},function(err,Cart){
    if(err)
    res.json(err);
    else
    res.json("Successfully Deleted");
  });
});

module.exports = router;