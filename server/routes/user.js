const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const scratchController = require('../controllers/scratchController');
// const clientController = require('../controllers/clientController')

// create, find, update, delete
router.get('/try/try-home', scratchController.view);
//router.post('/try-home', userController.search);

// Homepage and Pre-registration
router.get('/', userController.homepage);
router.post('/', userController.homepage);
router.get('/a-login', userController.loginG);
router.post('/a-login', userController.login);
router.get('/a-pre-registration', userController.registration);
router.post('/a-pre-registration', userController.add_registration);
router.post('/a-application-dl', userController.applicationUploadImage);
router.post('/a-application-dl', userController.applicationFormDL);

// Calculator
router.get('/calculator', userController.Calculator);



// Error
router.get('/401', userController.err401);
router.get('/404', userController.err404);
router.get('/500', userController.err500);

//Try
router.get('/admin/try-ben', userController.trybenAdmin);
router.get('/try-ben', userController.tryben);
router.post('/try-ben', userController.trybenP);

// Sratch Controller
router.get('/uploadImage', scratchController.uploadImageG);
router.post('/uploadImage', scratchController.uploadImageP);
router.post('/uploadImage', scratchController.uploadImageP1);

module.exports = router;