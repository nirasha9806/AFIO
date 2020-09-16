const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {LoyaltyCardReq} = require("../models/LoyaltyCardReq");
const {LoyaltyCardAdd} = require("../models/LoyaltyCardAdd");

//post method to save data
router.post("/insertCard", (req, res) => {

    //save data got from the client into the deliveries collection in the DB
    const loyaltyCardReq = new LoyaltyCardReq(req.body)

        loyaltyCardReq.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});

//post method to save data
router.post("/addCard", (req, res) => {

    //save data got from the client into the deliveries collection in the DB
    const loyaltyCardAdd = new LoyaltyCardAdd(req.body)

        loyaltyCardAdd.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});


//get method to fetch data from deliveries
router.get('/display', function(req,res){
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


module.exports = router;