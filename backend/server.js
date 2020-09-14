const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());

//BodyParser Middleware
app.use(bodyParser.json());


app.use('/api/payment',require('./routes/payment'))

//'/api/delivery' location
app.use('/api/delivery', require('./routes/delivery'));


app.use('/api/Cart', require('./routes/Cart'));
//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));