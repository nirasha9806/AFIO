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


<<<<<<< Updated upstream
=======
//'/api/voucher' location
app.use('/api/voucher', require('./routes/voucher'));

//'/api/product' location
app.use('/api/products', require('./routes/products'));

//'/api/product' location
app.use('/api/categories', require('./routes/categories'));

app.use('/api/category/', require('./routes/category'));

app.use('/api/users', require('./routes/users'));

app.use('/api/Cart', require('./routes/Cart'));


//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));

>>>>>>> Stashed changes
//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));