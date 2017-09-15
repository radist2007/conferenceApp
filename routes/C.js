var mongodb = require('mongodb');

var connectToDB = require('../lib/M_mongodb.js');
var M = require('./M.js');

function toThink(value, thinkCallback) {
    console.log("C -> server thinks over " + value);
        if(value == "count"){
            console.log("C -> server decided turned to M for count");
            M.showCount(function(callback){
                console.log("C -> from db.count() has came: " + callback);
                var toSend = {inner: callback}
                thinkCallback(toSend);
            })
        } else if(value == "home"){
            console.log("C -> toThinck home")
        } else if(value == "apply"){
            console.log("C -> toThinck home")
        } else if(value == "about"){
            console.log("C -> toThinck home")
        } else if(value == "contacts"){
            console.log("C -> toThinck home")
        }
}

function checkMessage(hasCame, toSend){
    switch (hasCame) {
      case "count":
        console.log( 'C -> checkMessage -> hasCame: ' + hasCame);
        toThink(hasCame, function(req){toSend(req);});
        break;
      case "home":
        console.log( 'C -> checkMessage -> homeCame' + hasCame);
        toThink(hasCame, function(req){toSend(req);});
        break;
      case "apply":
        console.log( 'C -> checkMessage -> hasCame: ' + hasCame);
        toThink(hasCame, function(req){toSend(req);});
        break;
      case "about":
        console.log( 'C -> checkMessage -> hasCame: ' + hasCame);
        toThink(hasCame, function(req){toSend(req);});
        break;
      case "contacts":
        console.log( 'C -> checkMessage -> hasCame: ' + hasCame);
        toThink(hasCame, function(req){toSend(req);});
        break;
      default:
        console.log( 'Я таких значений не знаю' );
    }
}



module.exports = {
    send: function(hasCame, callback){
        console.log("C -> hasCame: " + hasCame);
        checkMessage(hasCame, function(toSend){
            console.log("C -> send to V: " + toSend);
            callback(toSend);
        });
    },
    back: function(){

    }
}

