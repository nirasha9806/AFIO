const path = require('path')
const multer = require('multer')

//set storage engine
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, file.fieldname + '-' + Date.now() + ext)
    }
    
})

//Init upload
var upload = multer ({
    storage: storage,
    fileFilter: function(req, file, callback) {
        const ext = path.extname(file.originalname)
        if ( ext == '.jpg' || ext == '.png') {
            callback(null, true)

        }else{
            console.log('Only jpg and png files are supported!')
            callback(null, false)
        }
    }
})

/*var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ex = path.extname(file.originalname)
        if ( ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('Only jpg and png are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")*/


module.exports = upload