const mongoose = require('mongoose');

const scooterSchema = new mongoose.Schema({
    scooter_name:{
        type: String,
        required: 'Scooter Name wird benötigt',
        max: 32,
        trim: true
    },
    //muss noch gemacht werden
    image: String,
    scooter_standort:{
        type: String,
        required: 'Standort wird benötigt',
        trim: true
    },
    scooter_kfz:{
        type: String,
        required: 'Kennzeichen/Rahmennummer wird benötigt',
        trim: true
    },
    kostenprokm:{
        type: Number,
        required: 'Preis pro km wird benötigt',
    },
    verfügbar:{
        type: Boolean,
        required: 'Verfügbarkeit wird benötigt'
    }
});

// Exportieren des Models
module.exports = mongoose.model('Scooter', scooterSchema);