var credentials = require('../credentials.js');
var M_mongodb = require('../lib/M_mongodb.js');

function prepareHasCame(directive, hasCam, callback) {
    if(directive == "message"){
        var time = new Date();
        var temp = {
            name: hasCam.body.v2,
            email: hasCam.body.v3,
            message: hasCam.body.v4,
            date: time
        }
        console.log("M -> address to M_nomgodb.insert()" + directive);
        M_mongodb.insert(credentials.db.name, credentials.db.CollectionForSendMail, temp, function(toSend){
            console.log("1234: " + toSend);
            callback(toSend);
        })
    // } else if(directive == "application"){
    //     M_mongodb.insert(credentials.db.name, credentials.db.CollectionForConferenceApplication, hasCam, function(toSend){
    //         callback(toSend);
    //     })
    // } else if(directive == "countConferenceApplication"){
    //     M_mongodb.count(credentials.db.name, credentials.db.CollectionForConferenceApplication, function(toSend){
    //         callback(toSend);
    //     })
    } else if(directive == "countMessages"){
        console.log("M -> address to M_nomgodb.count()" + directive);
        M_mongodb.count(credentials.db.name, credentials.db.CollectionForSendMail, function(toSend){
            callback(toSend);
        })
    } else {
        console.log("M -> prepareHasCame: wrong directive!");
    }
}


module.exports = { 
    insert: function(directive, hasCam, callback) {
        console.log("M -> hasCam insert* " + directive);
        prepareHasCame(directive, hasCam, function(toSend){
            callback(toSend);
        })
    },
    show: function(directive, hasCam, collback) {
        console.log("M -> hasCame show*");
        prepareHasCame(directive, hasCam, function(toSend){
            callback(toSend);
        })
    },
    count: function(directive, callback) {
        console.log("M -> hasCame coutn*: " + directive);
        prepareHasCame(directive, "", function(toSend){
            console.log("M -> send number of docs from conferenceApps collections to V: " + toSend);
            callback(toSend);
        })
    }
}
