const Scooter = require('../models/scooter');

exports.homePage =(req, res) => {
    res.render('index', { title: 'Scooter Boys' });
}

exports.listAllscooters = async (req, res, next) => {
    try{
        const allScooters = await Scooter.find();
        res.render('all_scooters', { title: 'Alle Scooter', allScooters});
        //res.json(allScooters)
    }
    catch(error) {
        next(error);
    }

}

exports.buchung = (req, res) => {
    res.render('Buchung', { title: 'Scoote los!'});
}

exports.signUp =(req , res, next) => {
    //validate user info
    //console.log('sign up middleware')
    //next()
}

exports.logIn = (req, res) => {
    //login
    //console.log('login middleware')
}

exports.adminPage = (req, res) => {
    res.render('admin',  {title:'Admin'} );
}

exports.createScooterGet = (req, res) => {
    res.render('add_scooter',  {title:'Neues Fahrzeug hinzufügen'} );
}

exports.createScooterPost = async (req, res, next) => {
    try{
    const scooter = new Scooter(req.body);
    await scooter.save();
    res.redirect('/alle-scooter/' + scooter._id);
    }
    catch(error){
        next(error)
    }
}

