var express = require('express');
var router = express.Router();

//benötigt Controller
const scooterController = require('../controllers/scooterController');

/* GET home page. */
router.get('/', scooterController.homePage);

router.get('/alle-scooter' , scooterController.listAllscooters);

router.get('/buchung' , scooterController.buchung);

router.get('/signUp', scooterController.signUp, scooterController.logIn);

router.get('/logIn', scooterController.logIn);


module.exports = router;
