var express = require('express');
var router = express.Router();
var Appointment = require('../models/appointment');
var Forum = require('../models/forum');
var ForumComment = require('../models/forumComment');
var Feedback = require('../models/feedback');
var async = require("async");
var User = require('../models/user');


router.get('/homeForum', function(req, res) {
    Forum.find((err, docs) => {
        if (!err) {
            res.json({ success: true, data: docs });
        } else {
            res.json({ success: false, message: "Error while fetching" });
        }
    }).limit(8).sort({ '_id': -1 });
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


router.get('/postlist', function(req, res) {
    Forum.find((err, docs) => {
        if (!err) {
            res.json({ success: true, data: docs });
        } else {
            res.json({ success: false, message: "Error while fetching" });
        }
    }).sort({ '_id': -1 });
});

router.get('/postDetail/:id', (req, res) => {
    Forum.findById(req.params.id, function(err, forum) {
        if (!err) {
            res.json({ success: true, data: forum });
        } else {
            res.json({ success: false, message: "Error while fetching" });
        }

    });

});

router.get('/get_comment/:id', (req, res) => {
    ForumComment.find({ forum_id: req.params.id }, function(err, comments) {
        if (!err) {
            res.json({ success: true, data: comments });
        } else {
            res.json({ success: false, message: "Error while fetching" });
        }
    });
});

module.exports = router;