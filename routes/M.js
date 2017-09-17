var credentials = require('../credentials.js');
var M_mongodb = require('../lib/M_mongodb.js');

function prepareHasCame(directive, hasCam, callback) {
    if(directive == "message"){
        M_mongodb.insert(credentials.db.name, credentials.db.CollectionForSendMail, hasCam, function(toSend){
            callback(toSend);
        })
    } else if(directive == "application"){
        M_mongodb.insert(credentials.db.CollectionForConferenceApplication, hasCam, function(toSend){
            callback(toSend);
        })
    } else if(directive == "countConferenceApplication"){
        M_mongodb.count(credentials.db.CollectionForConferenceApplication, function(toSend){
            callback(toSend);
        })
    } else if(directive == "countMessage"){
        console.log("M -> address to M_nomgodb.count()" + directive);
        M_mongodb.count(credentials.db.name, credentials.db.CollectionForSendMail, hasCam, function(toSend){
            callback(toSend);
        })
    } else {
        console.log("M -> prepareHasCame: wrong directive!");
    }
}


module.exports = { 
    insert: function(directive, hasCam, callback) {
        console.log("M -> address to M_nomgodb.insert()");
        prepareHasCame(directive, hasCam, function(callback){
            callback(callback);
        })
    },
    show: function(hasCam, collback) {
        console.log("M -> address to M_nomgodb.show()");

    },
    count: function(directive, hasCam, callback) {
        console.log("M -> hasCame: " + directive);
        prepareHasCame(directive, hasCam, function(toSend){
            console.log("M -> send number of docs from conferenceApps collections to V: " + toSend);
            callback(toSend);
        })
        // M_mongodb.count(directive, function(toSend){
        //     console.log("M -> send number of docs from conferenceApps collections to V: " + toSend);
        //     callback(toSend);
        // })
    }
}
