exports.homePage =(req, res) => {
    res.render('index', { title: 'Scooter Boys' });
}

exports.listAllscooters = (req, res) => {
    res.render('all_scooters', { title: 'Alle Scooter'});
}

exports.buchung = (req, res) => {
    res.render('Buchung', { title: 'Scoote los!'});
}

exports.signUp =(req , res, next) => {
    //validate user info
    console.log('sign up middleware')
    next()
}

exports.logIn = (req, res) => {
    //login
    //console.log('login middleware')
}

