const mysql = require('mysql');
const uuid = require('uuid'); 
const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './profile');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, uuid.v4() + path.extname(file.originalname));
    }
})
const upload = multer({storage: storage}); 

// Upload Image
exports.uploadImageG = (req, res) => { 
    const data = {
        title: "Ulpoad"
    }   
    console.log(storage.filename);
    console.log('Upload'+ upload)
    res.render('uploadImage', data);
}
exports.uploadImageP = upload.single('image'), (req, res) => { 
    const data = {
        title: "Ulpoad"
    }   
    res.render('uploadImage', data);
}

exports.uploadImageP1 = (req, res) => { 
    const data = {
        title: "Ulpoad"
    }  
    console.log(storage.filename) 
    res.render('uploadImage', data);
}

// try
exports.view = (req, res) => { 
    const data = {
        title: "View"
    }  
    res.render('try/try-home', data);
}