var express = require('express');
var router = express.Router();

var C = require('./C');

router.get('/', function(req, res) {
	console.log('V -> GET /home');
	res.render('home');
});
router.post('/home', function(req, res) {
    console.log('V -> POST /home: ' + req.body.onRout);
    C.send(req.body.onRout, function(callback){
        res.status(200).send(callback);
    })
});
router.post('/apply', function(req, res) {
    console.log('V -> POST /apply: ' + req.body.onRout);
    C.send(req.body.onRout, function(callback){
        res.status(200).send(callback);
    })
});
router.post('/about', function(req, res) {
    console.log('V -> POST /about: ' + req.body.onRout);
    C.send(req.body.onRout, function(callback){
        res.status(200).send(callback);
    })
});
router.post('/contacts', function(req, res) {
    console.log('V -> POST /contacts: ' + req.body.onRout);
    C.send(req.body.onRout, function(callback){
        res.status(200).send(callback);
    })
});
router.post('/count', function(req, res) {
    console.log('V -> POST /count: ' + req.body.send);
    C.send(req.body.send, function(callback){
    console.log('V -> count callback: ' + callback);
        res.status(200).send(callback);
    })
});

module.exports = router;