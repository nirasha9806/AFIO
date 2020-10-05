const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {Feedback} = require("../models/Feedback");

//post method to save data
router.post("/insertFeedback/:id", (req, res) => {

    
    const feedback = new Feedback(req.body)

        feedback.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});

//retrieve
router.get('/displayFeedback/:id', function(req,res){
    console.log('get requests for all feedbacks');
    Feedback.find({cusId: req.params.id})
    .exec(function(err, feedbacks){
        if(err) {
            console.log('error')
        }else {
            res.json(feedbacks);
        }
    });
});

//retrieve to display to admin
router.get('/feedbackAdmin', function(req,res){
    console.log('get requests for all feedbacks');
    Feedback.find({})
    .exec(function(err, feedbacks){
        if(err) {
            console.log('error')
        }else {
            res.json(feedbacks);
        }
    });
  });

module.exports = router;
