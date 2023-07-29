const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './imagesvedio');
    },
    filename: function(req, file, cb) {    
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png','video/mp4','video/mp3'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

// let upload = multer({ storage,fileFilter });

const uploadMiddleware = multer({ storage,fileFilter });
module.exports = uploadMiddleware;
