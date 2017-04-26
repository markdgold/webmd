var express = require('express');
var router = express.Router();
var async = require('async');
var db = require('../models');

router.get('/', function(req, res) {
    db.symptom.findAll().then(function(symptoms) {
        res.render("symptoms/all", { symptoms: symptoms });
    })
});

router.post('/', function(req, res) {
    db.symptom.create(req.body).then(function(symptom) {
        res.redirect('/symptoms');
    }).catch(function(error) {
        res.send(error);
    })
});

router.get('/add', function(req, res) {
    res.render('symptoms/add');
});

router.get('/:id', function(req, res) {
    db.symptom.findOne({
        where: { id: req.params.id },
        include: [db.disease]
    }).then(function(symptom) {
        console.log(symptom.diseases);
        res.render('symptoms/show', { symptom: symptom });
    })
})

module.exports = router;
