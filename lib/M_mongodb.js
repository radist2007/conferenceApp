var mongodb = require('mongodb');
var credentials = require('../credentials.js');

function connect() {
    return new Promise(function(resolve, reject){
        var MongoClient = mongodb.MongoClient;
        var url = 'mongodb://localhost:27017/' + credentials.db.name;
        console.log(url);
        MongoClient.connect(url, function(err, db){
            if(err){
                console.log('M_mongodb -> Unable to connect to the server ', err);
                db.close();
                reject("M_mongodb -> bed connect:( " + err);
            } else {
                console.log('M_mongodb -> connection GOOD!');
                resolve(db);
            }
        });
    })
}

function insert(db) {
    return new Promise(function(resolve, reject){
        console.log('M_mongodb -> insert*: ' + db);
        db.collection('usersMessages').insert({name: n, email: e, message: m}, function(err, result) {
        // db.collection('usersMessages').insert({name: name, email: email, message: message}, function(err, result) {
            if(err) {
                console.log(err);
                console.log('M_mongodb -> connecktin close');
                db.close();
                reject(err);
            } else {
                console.log('M_mongodb -> connection result: ' + result);
                db.close();
                resolve('thankYou')
            }
        })
        // console.log('M -> insert$ ');
    })
}

function show(db) {
    return new Promise(function(resolve, reject){
        db.collection('usersMessages').find().toArray(function(err, docs){
            if(err) {
                console.log(err);
                reject(err);
            }
            db.close();
            var toSend = []; 
            for(var i = 0; i < docs.length; i++){
                toSend.push({
                    name: docs[i].name,
                    email: docs[i].email,
                    message: docs[i].message
                })
            }
            resolve(toSend)
        });
    })
}

function count(db) {
    return new Promise(function(resolve, reject){
        var count;
        count = db.collection(credentials.db.CollectionForConferenceApplication).count();
        db.close();
        console.log("M_mongodb -> count(): " + count);
        resolve(count);
    })
}

function send(toSend) {
    return new Promise(function(resolve, reject){
            toSend = JSON.stringify(toSend);
            console.log("M_mongodb -> send(): " + toSend);
            toSend = {inner: toSend}
            resolve(toSend);
    });
}

function toCatch(e) {
    return new Promise(function(resolve, reject){
        console.log('M_mongodb -> catch from promise: ' + e)
    })
}

var n, e, m;

module.exports = { 
    insert: function(name, email, message) {
        n = name;
        e = email;
        m = message;
        connect()
        .then(insert)
        .catch(toCatch);
    },
    show: function(collback) {
        connect()
        .then(show)
        .then(send)
        .then(value => {collback(value);})
        .catch(toCatch);
    },
    count: function(callback) {
        console.log('M_mongodb -> showCount*');
        connect()
        .then(count)
        .then(send)
        .then(value => {console.log('M_mongodb -> showCount$');callback(value);})
        .catch(toCatch);
    }
}