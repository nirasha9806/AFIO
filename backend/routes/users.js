const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        firstName: req.user.firstName,
        lastName: req.user.firstName,
        role: req.user.role,
        //image: req.user.image,
    });
});

router.post("/register", (req, res) => {

    const user = new User(req.body);
    user.userType = 'User'
    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id, userType: user.userType,
                    });
            });
        });
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

router.route('/:email').get((req, res) => {
    User.find({email:req.params.email})
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/').get((req, res) => {
    User.find()
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/delete/:id').delete((req, res) => {
    User.deleteOne({_id: req.params.id})
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;


