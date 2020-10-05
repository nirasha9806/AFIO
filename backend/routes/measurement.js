const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {Measurement} = require("../models/Measurement");

//post method to save data
router.post("/insertMeasurement", (req, res) => {

    //save data got from the client into the measurement collection in the DB
    const measurement = new Measurement(req.body)

    measurement.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});
module.exports = router;