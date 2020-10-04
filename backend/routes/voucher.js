const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {Voucher} = require("../models/Voucher");

//post method to save data
router.post("/insertVoucher", (req, res) => {

    //save data got from the client into the voucher collection in the DB
    const voucher = new Voucher(req.body)

        voucher.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});

//get method to fetch data from vouchers
router.get('/', function(req, res){
    console.log('Get voucher details');
    Voucher.find({})
    .exec(function(err, vouchers){
        if(err){
            console.log('Error retrieving')
        }else{
            res.json(vouchers);
        }
    });
});

//delete from database
router.post('/delete/:id',function (req,res){
    Voucher.deleteOne({_id: req.params.id}, function(err, voucher){
        if(err) res.json(err);
        else res.json('Successfully Deleted');

    });
});
router.get('/edit/:id', function (req, res) {
    let id = req.params.id;
    Voucher.findById(id, function (err,voucher){
        res.json(voucher);
    });
  });

//defined edit route
router.post('/update/:id', function (req, res) {
    Voucher.findById(req.params.id, function(err, voucher){
        if (!voucher)
            res.status(404).send("Data is not found");

        else{
            voucher.number = req.body.number;
            voucher.searchField = req.body.searchField;
            voucher.radio1 = req.body.radio1;
            voucher.message = req.body.message;
            voucher.note = req.body.note;

            voucher.save().then(voucher => {
                res.json('Update Complete ');
            })
    
        .catch(err => {
            res.status(400).send("Unable to update database");
        });
    }
});
});


module.exports = router;