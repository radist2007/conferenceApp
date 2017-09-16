var mongodb = require('mongodb');

var connectToDB = require('../lib/M_mongodb.js');
var M = require('./M.js');

function serevThink(hasCame, toSend){
    console.log("C -> server thinks over hasCame " + hasCame.body);
    if(hasCame.body.v1 == "count"){
        M.count(function(callback){toSend(callback)})
    } else if(hasCame.body.v1 == "home"){
        M.count(function(callback){toSend(callback)})
    } else if(hasCame.body.v1 == "apply"){
        M.count(function(callback){toSend(callback)})
    } else if(hasCame.body.v1 == "about"){
        M.count(function(callback){toSend(callback)})
    } else if(hasCame.body.v1 == "contacts"){
        M.count(function(callback){toSend(callback)})
    } else if(hasCame.body.v1 == "login"){
        M.count(function(callback){toSend(callback)})
    } else {
        console.log("C -> server decided: I DONT KNOY ");
    }
}

module.exports = {
    send: function(hasCame, callback){
        console.log("C -> hasCame: " + hasCame);
        serevThink(hasCame, function(toSend){
            console.log("C -> send to V: " + JSON.stringify(toSend));
            callback(toSend);
        });
    },
    back: function(){

    }
}

