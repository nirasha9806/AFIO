const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {Delivery} = require("../models/Delivery");
//const {RequestStatus} = require("../models/RequestStatus");
//const {OrderHistory} = require("../models/OrderHistory");

//post method to save data
router.post("/insertDelivery/:id", (req, res) => {

    //save data got from the client into the deliveries collection in the DB
    const delivery = new Delivery(req.body)

        delivery.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});

/*
//get method to fetch data from deliveries
router.get('/display/:id', function(req,res){
    console.log('get requests for all deliveries');
    Delivery.find({cusId: req.params.id})
    .exec(function(err, deliveries){
        if(err) {
            console.log('error')
        }else {
            res.json(deliveries);
        }
    });
});

//get method to fetch data from deliveries
router.get('/displaytoAdmin', function(req,res){
  console.log('get requests for all deliveries');
  Delivery.find({})
  .exec(function(err, deliveries){
      if(err) {
          console.log('error')
      }else {
          res.json(deliveries);
      }
  });
});


//get method to search
router.get('/', function(req,res){
    console.log('get requests for all deliveries');
    Delivery.find({})
    .exec(function(err, deliveries){
        if(err) {
            console.log('error')
        }else {
            res.json(deliveries);
        }
    });
});

// Defined edit route
router.get('/editStatus/:id', function (req, res) {
  let id = req.params.id;
  Delivery.findById(id, function (err, delivery){
      res.json(delivery);
  });
});

//update method
router.post('/update/:id', function (req, res) {
  Delivery.findById(req.params.id, function(err, delivery) {
  if (!delivery)
    res.status(404).send("data is not found");
  else {
      delivery.status = req.body.status;

      delivery.save().then(delivery => {
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
  Delivery.findByIdAndRemove({_id: req.params.id}, function(err, delivery){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});


////post method to save data
router.post("/insertRequest", (req, res) => {

  //save data got from the client into the deliveries collection in the DB
  const request = new RequestStatus(req.body)

      request.save((err) => {
          if(err) return res.status(400).json({ success: false, err})
          return res.status(200).json({ success: true})
      })
});

//get method to fetch data from requeststatuses
router.get('/requestsRetrieve', function(req,res){
  console.log('get requests for all requests');
  RequestStatus.find({})
  .exec(function(err, requeststatuses){
      if(err) {
          console.log('error')
      }else {
          res.json(requeststatuses);
      }
  });
});

//delete requests method
router.post('/deleteRequest/:id',function (req, res) {
    RequestStatus.findByIdAndRemove({_id: req.params.id}, function(err, request){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
  });


 //post method to save data in OrderHistory
router.post("/insertHistory", (req, res) => {

    //save data got from the client into the orderhistories collection in the DB
    const orderHistory = new OrderHistory(req.body)

        orderHistory.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
}); 


//get method to fetch data from orderhistories
router.get('/displayHistory', function(req,res){
    console.log('get requests for all Order histories');
    OrderHistory.find({})
    .exec(function(err, orderhistories){
        if(err) {
            console.log('error')
        }else {
            res.json(orderhistories);
        }
    });
  });*/

module.exports = router;