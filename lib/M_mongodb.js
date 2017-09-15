var mongodb = require('mongodb');

function connect() {
    return new Promise(function(resolve, reject){
        console.log('M_mongodb -> connect Start');

        var MongoClient = mongodb.MongoClient;
        var url = 'mongodb://localhost:27017/sendMailApp';

        MongoClient.connect(url, function(err, db){
            if(err){
                console.log('Unable to connect to the server ', err);
                reject("bed connect:( " + err);
            } else {
                console.log('M_mongodb -> connection GOOD!');
                resolve(db);
            }
        });
    })
}

function insert(db) {
    return new Promise(function(resolve, reject){
        console.log('insert Start');
        console.log('insert: ' + db);

        db.collection('usersMessages').insert({name: n, email: e, message: m}, function(err, result) {
        // db.collection('usersMessages').insert({name: name, email: email, message: message}, function(err, result) {
            if(err) {
                console.log(err);
                console.log('connecktin close');
                db.close();
                reject(err);
            } else {
                console.log('connection result: ' + result);
                db.close();
                resolve('thankYou')
            }
        })
        console.log('insert end');
    })
}

function show(db) {
    return new Promise(function(resolve, reject){
        db.collection('usersMessages').find().toArray(function(err, docs){
            if(err) {
                console.log(err);
                reject(err);
            }
            console.log('connecktin close');
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
        console.log('M_mongobd -> showCount -> count');
        var count;
        count = db.collection('usersMessages').find().count();
        console.log("M_mongodb -> cont: " + count);
        resolve(count);
    })
}

function send(toSend) {
    return new Promise(function(resolve, reject){
            toSend = JSON.stringify(toSend);
            console.log("M_mongodb -> send: " + toSend);
            resolve(toSend);
    });
}

function toCatch(e) {
    return new Promise(function(resolve, reject){
        console.log('catch from promise of mongoDBconnect.js: ' + e)
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
    showCount: function(callback) {
        console.log('M_mongobd -> showCount start');
        connect()
        .then(count)
        .then(send)
        .then(value => {callback(value)})
        .catch(toCatch);
    }
}
