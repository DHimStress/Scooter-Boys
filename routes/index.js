var express = require('express');
var router = express.Router();

//benötigt Controller
const scooterController = require('../controllers/scooterController');

/* GET home page. */
router.get('/', scooterController.homePage);

router.get('/alle-scooter' , scooterController.listAllscooters);

router.get('/buchung' , scooterController.buchung);




module.exports = router;
