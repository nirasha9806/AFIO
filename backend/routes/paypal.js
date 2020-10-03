const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {Paypal} = require("../models/Paypal");

//post method to save data
router.post("/insertPaypal", (req, res) => {

    //save data got from the client into the credits collection in the DB
    const paypal = new Paypal(req.body)

        paypal.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});

//get data
router.get('/:password', function(req,res){
    console.log('get requests for all paypal');
    Paypal.find({password: req.params.password})
    .exec(function(err, paypal){
        if(err) {
            console.log('error')
        }else {
            res.json(paypal);
        }
    });
  });


  //edit
 router.get("/edit/:id", (req,res) => {
    let id = req.params.id;
    Paypal.findById(id,function(err,paypal){
        res.json(paypal);
    });
});


 //update
 router.post("/updatePayPal/:id",(req,res) =>{
    PayPal.findById(req.params.id,function (err , paypal){
        if(!paypal)
           res.status(404).send("Data is not found");
       else{
           paypal.cname = req.body.cname;
           paypal.email = req.body.email;
           paypal.password = req.body.password;
           

           paypal.save().then(paypal => {
               res.json('Update Complete');
           })
               .catch(err => {
                   res.status(400).send("Unable to update the database");
               });
       
       }
    });
});

module.exports = router;