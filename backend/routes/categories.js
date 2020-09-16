const router = require('express').Router();
//let Category = require('../models/category.model');

router.route('/').get((req, res) => {
  Category.find()
    .then(categories => res.json(categories))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const categoryType = req.body.categoryType;

  const newCategory= new Category({categoryType});

  newCategory.save()
    .then(() => res.json('Category added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;