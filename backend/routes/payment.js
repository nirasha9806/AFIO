const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {Credit} = require("../models/Credit");

router.post("/insertCredit", (req,res) =>{

    const credit = new Credit(req.body)

    credit.save((err) =>{
        if(err) return res.status(400).json({ success: false, err})
        return res.status(200).json({ success: true})
    })
});
//get data
router.get('/:pin', function(req,res){
    console.log('get requests for all credits');
    Credit.find({pin_number: req.params.pin})
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
    Credit.findById(id, function (err, credit){
        res.json(credit);
    });
  });
  
  //update method
  router.post('/update/:id', function (req, res) {
    Credit.findById(req.params.id, function(err, credit) {
    if (!credit)
      res.status(404).send("data is not found");
    else {
        credit.cname = req.body.cname;
        credit.email = req.body.email;
        credit.CVC = req.body.CVC;
        credit.month = req.body.month;
        credit.year = req.body.year;
        credit.pin_number = req.body.pin_number;
        credit.cardName = req.body.cardName;
        credit.baddress = req.body.baddress;
  
        credit.save().then(credit => {
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
  Credit.findByIdAndRemove({_id: req.params.id}, function(err, credit){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

module.exports = router;
