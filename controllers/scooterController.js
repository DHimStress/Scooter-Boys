exports.homePage =(req, res) => {
    res.render('index', { title: 'Scooter Boys' });
}

exports.listAllscooters = (req, res) => {
    res.render('all_scooters', { title: 'Alle Scooter'});
}

exports.buchung = (req, res) => {
    res.render('Buchung', { title: 'Scoote los!'});
}

exports.signUp =(req , res) => {
    //validate user info
}

exports.logIn = (req, res) => {
    //login
}

