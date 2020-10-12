const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {LoyaltyCardReq} = require("../models/LoyaltyCardReq");
const {LoyaltyCardAdd} = require("../models/LoyaltyCardAdd");

//post method to save data
router.post("/insertCard", (req, res) => {

    //save data got from the client into the loyalty collection in the DB
    const loyaltyCardReq = new LoyaltyCardReq(req.body)

        loyaltyCardReq.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});

//post method to save data
router.post("/addCard", (req, res) => {

    //save data got from the client into the loyalty collection in the DB
    const loyaltyCardAdd = new LoyaltyCardAdd(req.body)

        loyaltyCardAdd.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});


//get method to fetch data from loyalty
router.get('/display', function(req,res){
    console.log('get requests for all loyaltycards');
    LoyaltyCardAdd.find({})
    .exec(function(err, loyaltycardadds){
        if(err) {
            console.log('error')
        }else {
            res.json(loyaltycardadds);
        }
    });
  });

    //get method to search
router.get('/', function(req,res){
  console.log('get requests for all deliveries');
  LoyaltyCardAdd.find({})
  .exec(function(err, loyaltycardadds){
      if(err) {
          console.log('error')
      }else {
          res.json(loyaltycardadds);
      }
  });
});

  //delete method
router.post('/delete/:id',function (req, res) {
    LoyaltyCardAdd.findByIdAndRemove({_id: req.params.id}, function(err, loyaltyCardAdd){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
  });


  // Defined edit route
router.get('/editLoyalty/:id', function (req, res) {
    let id = req.params.id;
    LoyaltyCardAdd.findById(id, function (err, loyaltyCardAdd){
        res.json(loyaltyCardAdd);
    });
  });
  
  //update method
  router.post('/update/:id', function (req, res) {
    LoyaltyCardAdd.findById(req.params.id, function(err, loyaltyCardAdd) {
    if (!loyaltyCardAdd)
      res.status(404).send("data is not found");
    else {
        loyaltyCardAdd.cardType= req.body.cardType;
        loyaltyCardAdd.discount=req.body.discount;
  
        loyaltyCardAdd.save().then(loyaltyCardAdd => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
  });


module.exports = router;