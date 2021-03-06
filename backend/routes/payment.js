const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {Card} = require("../models/Credit");

router.post("/insertCredit", (req,res) =>{

    const card = new Card(req.body)

    card.save((err) =>{
        if(err) return res.status(400).json({ success: false, err})
        return res.status(200).json({ success: true})
    })
});
//get data
router.get('/:pin', function(req,res){
    console.log('get requests for all credits');
    Card.find({pin_number: req.params.pin})
    .exec(function(err, credits){
        if(err) {
            console.log('error')
        }else {
            res.json(credits);
        }
    });
  });


// Defined edit route
router.get('/edit/:id', function (req, res) {
    let id = req.params.id;
    Card.findById(id, function (err, card){
        res.json(card);
    });
  });
  
  //update method
  router.post('/update/:id', function (req, res) {
    Card.findById(req.params.id, function(err, card) {
    if (!card)
      res.status(404).send("data is not found");
    else {
      card.cname = req.body.cname;
      card.cardType = req.body.cardType;
      card.bankname = req.body.bankname;
      card.CVC = req.body.CVC;
      card.expiry= req.body.expiry;
      card.pin_number = req.body.pin_number;
      card.cardName = req.body.cardName;
  
        card.save().then(card => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
  });

//delete method
router.post('/delete/:id',function (req, res) {
  Card.findByIdAndRemove({_id: req.params.id}, function(err, card){
      if(err){
         res.json(err);
      }
      else {
        res.json('Successfully removed');
      }
  });
});

module.exports = router;
