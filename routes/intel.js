var express = require('express');
var router = express.Router();

var V = require('./V');

router.get('/', function(req, res) {
	console.log('GET /home');
	res.render('home');
});
// router.use('/contacts', V);
router.post('/home', function(req, res) {
    console.log('POST /home: ' + req.body.v);
    V.send(req.body.v, function(callback){
        res.status(200).send(callback);
    })
});
router.post('/apply', function(req, res) {
    console.log('POST /apply: ' + req.body.v);
    V.send(req.body.v, function(callback){
        res.status(200).send(callback);
    })
});
router.post('/about', function(req, res) {
    console.log('POST /about: ' + req.body.v);
    V.send(req.body.v, function(callback){
        res.status(200).send(callback);
    })
});
router.post('/contacts', function(req, res) {
    console.log('POST /contacts: ' + req.body.v);
    V.send(req.body.v, function(callback){
        res.status(200).send(callback);
    })
});

module.exports = router;