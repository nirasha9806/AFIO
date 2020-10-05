const router = require('express').Router();
let Product = require('../models/product.model');


//---------Product---------


router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const productName = req.body.productName;
    const price = Number(req.body.price);
    const discount = Number(req.body.discount);
    const categoryType = req.body.categoryType;
    const description = req.body.description;


    //creating new product
    const newProduct = new Product({
        productName,
        price,
        discount,
        categoryType,
        description,
  
    });

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));

        router.route('/:id').get((req, res) =>{
            Product.findById(req.params.id)
                .then(product => res.json(product))
                .catch(err => res.status(400).json('Error: ' + err));
        });
    
        
});



module.exports = router;