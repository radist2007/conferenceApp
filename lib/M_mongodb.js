var mongodb = require('mongodb');

function connect() {
    return new Promise(function(resolve, reject){
        var MongoClient = mongodb.MongoClient;
        var url = 'mongodb://localhost:27017/' + database;
        console.log(url);
        MongoClient.connect(url, function(err, db){
            if(err){
                console.log('M_mongodb -> Unable to connect to the server ', err);
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
        db.collection(collection).insert(data, function(err, result) {
            if(err) {
                console.log(err);
                reject(err);
            } else {
                console.log('M_mongodb -> connection result: ' + result);
                db.close();
                resolve('thankYou')
            }
        })
    })
}

function select(db) {
    return new Promise(function(resolve, reject){
        db.collection(collection).find().toArray(function(err, docs){
            if(err) {
                console.log(err);
                reject(err);
            }
            db.close();
            resolve(docs)
        });
    })
}

function count(db) {
    return new Promise(function(resolve, reject){
        var count;
        count = db.collection(collection).count();
        // db.close();
        console.log("M_mongodb -> count(): " + count);
        resolve(count);
    })
}

function prepareToSend(task) {
    return new Promise(function(resolve, reject){
            task = JSON.stringify(task);
            console.log("M_mongodb -> prepareToSend(): " + task);
            resolve(task);
    });
}

function toCatch(e) {
    return new Promise(function(resolve, reject){
        console.log('M_mongodb -> catch from promise: ' + e)
    })
}
var database, collection, data;
module.exports = { 
    insert: function(db, c, d, callback) {
        console.log('M_mongodb -> insert*');
        database = db;
        collection = c;
        data = d;
        connect()
        .then(insert)
        .then(value => {console.log('M_mongodb -> insert$');callback(value);})
        .catch(toCatch);
    },
    select: function(db, c, d, callback) {
        database = db;
        collection = c;
        data = d;
        connect()
        .then(show)
        .then(prepareToSend)
        .then(value => {callback(value);})
        .catch(toCatch);
    },
    count: function(db, c, callbackk) {
        console.log('M_mongodb -> showCount*');
        database = db;
        collection = c;
        connect()
        .then(count)
        // .then(prepareToSend)
        .then(value => {console.log('M_mongodb -> showCount$');callbackk(value);})
        .catch(toCatch);
    }
}