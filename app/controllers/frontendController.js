var express = require('express');
var router = express.Router();
var Appointment = require('../models/appointment');
var Forum = require('../models/forum');
var async = require("async");
var User = require('../models/user');


router.get('/postlist', function(req, res) {
    Forum.find((err, docs) => {
        if (!err) {
            console.log(docs);
            res.render("postlist", {
                forums: docs,
                layout: ""
            });
        } else {
            console.log('Error in retrieving page :' + err);
        }
    });
});

router.post('/appointment', (req, res) => {
    var appointment = new Appointment();
    appointment.name = req.body.name;
    appointment.petname = req.body.petname;
    appointment.phone = req.body.phone;
    appointment.email = req.body.email;
    appointment.date = req.body.date;
    appointment.time = req.body.time;
    appointment.message = req.body.message;


    console.log(appointment);
    appointment.save((err, doc) => {
        if (err) {
            res.send({ 'Success': 'Something is wrong' });
        } else {
            res.send({ "Success": 'We will call you soon' });
        }
    });
});

router.post('/contact', (req, res) => {
    res.header("allow-file-access-from-files", "*");
    var feedback = new Feedback();

    feedback.name = req.body.name;
    feedback.phone = req.body.phone;
    feedback.email = req.body.email;
    feedback.message = req.body.message;


    console.log(feedback);
    feedback.save((err, doc) => {
        if (err) {
            res.send({ 'Success': 'Something is wrong' });
        } else {
            res.send({ "Success": 'Your feedback successfully send. We will call you soon' });
        }
    });
});


module.exports = router;