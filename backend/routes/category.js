const express = require('express');
const router = express.Router();
const { Category } = require("../models/Category");
const multer = require('multer');

const { auth } = require("../middleware/auth");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")

//---------------------------------
//             Category
//---------------------------------

router.post("/uploadImage",auth, (req, res) => {
   
    upload(req, res, err => {
        if(err) {
            return res.json({ success: false, err})
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })
    
});

router.post("/uploadCategory",auth, (req, res) => {
   
   const category = new Category(req.body)

   category.save((err) => {
       if(err) return res.status(400).json({ success: false, err})
       return res.status(200).json({ success: true})
   })
    
});

// router.post("/getCategory", auth, (req, res) => {
   
//     Category.find()
//     .exec((err, categories) => {
//         if(err) return res.status(400).json({ success: false, err })
//         res.status(200).json({ success : true, categories})
//     })
     
//  });

//  ?id=${categoryId} & type = single
 router.get("/categories_by_id",  (req, res) => {
   let type = req.query.type
   let categoryIds = req.query.id 

   if (type === "array " ) {

   }

   Category.find({'_id' :{ $in: categoryIds }})
    .populate('writer')
    .exec((err, category) => {
        if(err) return res.status(400).send(err)
        return res.status(200).send(category)
    })
    
});


// router.get("/", auth, (req, res) => {
//     Category.find((err, category) => {
//         if(err){
//             console.log(err);
//         }
//         else {
//             res.json(category);
//         }
//     });
//  });

 router.route('/').get((req, res) => {
    Category.find()
      .then(category => res.json(category))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/edit/:id').put((req, res) => {
    Category.findById(req.params.id)
    .then(category => {
        category.categoryID = req.body.categoryID;
        category.categoryName = req.body.categoryName;
        category.categoryType = req.body.categoryType;
        category.description = req.body.description;
        // category.subCategoryType = req.body.subCategoryType;
        category.images = req.body.images;
        

        category.save()
        .then(() => res.json('Category updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').get((req, res) => {
    Category.findById(req.params.id)
      .then(category => res.json(category))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/delete/:id').delete((req, res) => {
    Category.deleteOne({_id: req.params.id})
      .then(category => res.json(category))
      .catch(err => res.status(400).json('Error: ' + err));
  });
   
module.exports = router;

