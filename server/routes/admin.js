const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


// adminController
router.post('/sa-dashboard', adminController.SAdashboard);
router.get('/sa-dashboard', adminController.SAdashboardGET);
router.get('/sa-members', adminController.SAmembers);
router.post('/sa-members-profile', adminController.SAmemberProfile);
router.get('/sa-addmember', adminController.SAaddmemberG);
router.post('/sa-addmember', adminController.SAaddmemberP);
router.post('/sa-addmember', adminController.SAaddmemberP1);
router.get('/sa-terminated', adminController.SAterminated);
router.get('/sa-addloan', adminController.SAaddloan);
router.get('/sa-payment', adminController.SApayment);
router.get('/sa-maturity', adminController.SAmaturity);
router.get('/sa-patronage', adminController.SApatronage);
router.get('/sa-expenses', adminController.SAexpenses);
router.get('/sa-cashflow', adminController.SAcashflow);
router.get('/sa-dailyCollection', adminController.SAdailyCollection);
router.get('/sa-loan-releases', adminController.SAloanrelease);
router.get('/sa-income-reports', adminController.SAincomereport);
router.get('/sa-condonation', adminController.SAcondonation);


module.exports = router;