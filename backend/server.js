const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const path = require("path");
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

//BodyParser Middleware
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/payment',require('./routes/payment'))

app.use('/api/feedback',require('./routes/feedback'))

//'/api/delivery' location
app.use('/api/delivery', require('./routes/delivery'));

app.use('/api/LoyaltyCard', require('./routes/LoyaltyCard'));


//'/api/voucher' location
app.use('/api/voucher', require('./routes/voucher'));

//'/api/product' location
app.use('/api/products', require('./routes/products'));

//'/api/product' location
app.use('/api/categories', require('./routes/categories'));

const adminRouteCategory = require("./routes/category");
app.use("/api/category", adminRouteCategory);

app.use('/api/users', require('./routes/users'));

app.use('/api/Cart', require('./routes/Cart'));

app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

    // Set static folder   
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes    html or routing and naviagtion
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
  }

//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));