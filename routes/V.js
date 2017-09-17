var express = require('express');
var router = express.Router();

var C = require('./C');

router.get('/', function(req, res) {
	console.log('V -> GET /home');
	res.render('home');
});

router.post('/countConferenceApplication', function(req, res) {
    console.log('V -> POST /countConferenceApplication: ' + req.body.v1);
    C.send(req, function(callback){
    console.log('V -> countConferenceApplication callback: ' + callback);
        res.status(200).send(callback);
    })
});
router.post('/countMessages', function(req, res) {
    console.log('V -> POST /countMessage: ' + req.body.v1);
    C.send(req, function(callback){
    console.log('V -> countMessage callback: ' + callback);
        res.status(200).send(callback);
    })
});
router.post('/login', function(req, res) {
    console.log('V -> POST /login: ' + req.body.v1);
    C.send(req, function(callback){
    console.log('V -> login callback: ' + callback);
        res.status(200).send(callback);
    })
});
router.post('/message', function(req, res) {
    console.log('V -> POST /message: ' + req.body.v1);
    C.send(req, function(callback){
    console.log('V -> message callback: ' + callback);
        res.status(200).send(callback);
    })
});
router.post('/conferenceApplication', function(req, res) {
    console.log('V -> POST /conferenceApplication: ' + req.body.v1);
    C.send(req, function(callback){
    console.log('V -> conferenceApplication callback: ' + callback);
        res.status(200).send(callback);
    })
});

module.exports = router;



// router.post('/home', function(req, res) {
//     console.log('V -> POST /home: ' + req.body.v1);
//     C.send(req, function(callback){
//         res.status(200).send(callback);
//     })
// });
// router.post('/apply', function(req, res) {
//     console.log('V -> POST /apply: ' + req.body.v1);
//     C.send(req, function(callback){
//         res.status(200).send(callback);
//     })
// });
// router.post('/about', function(req, res) {
//     console.log('V -> POST /about: ' + req.body.v1);
//     C.send(req, function(callback){
//         res.status(200).send(callback);
//     })
// });
// router.post('/contacts', function(req, res) {
//     console.log('V -> POST /contacts: ' + req.body.v1);
//     C.send(req, function(callback){
//         res.status(200).send(callback);
//     })
// });