var credentials = require('../credentials.js');
var emailService = require('../lib/email.js')(credentials);
var M = require('./M.js');

function serevThink(hasCame, toSend){
    console.log("C -> server thinks over hasCame " + hasCame.body);

    if(hasCame.body.v1 == "countConferenceApplication"){
//COUTN SAM
        M.count("countConferenceApplication", function(callback){toSend({v1: "countConferenceApplication", v2: callback})});

    } else if(hasCame.body.v1 == "countMessages"){
//COUTN SAM
        M.count("countMessages", function(callback){toSend({v1: "coutnMessages", v2: callback})});

//     } else if(hasCame.body.v1 == "home"){
// //HOME call
//         // M.count(function(callback){toSend(callback)})

//     } else if(hasCame.body.v1 == "apply"){
// //APPLY call
//         // M.count(function(callback){toSend(callback)})

//     } else if(hasCame.body.v1 == "about"){
// //ABOUT call
//         // M.count(function(callback){toSend(callback)})

//     } else if(hasCame.body.v1 == "contacts"){
// //CONTACTS call
//         // M.show(hasCame, function(callback){toSend(callback)})

//     } else if(hasCame.body.v1 == "login"){
//         M.select(hasCame, function(callback){toSend(callback)});
// //LOGIN

    } else if(hasCame.body.v1 == "message"){
//SEND MESSAGES
//-------first message
        var html = '<h1>' + hasCame.body.v2 + '</h1>' + '<h2>' + hasCame.body.v3 + '</h2>' + '<p>' + hasCame.body.v4 + '</p>';
        emailService.send(credentials.gmail.user, hasCame.body.v4, html, function(callback){
            if(callback == 1){console.log("email is good");}
            else {console.log("email is bad");}});
//-------second message
        html = '<h3>' + hasCame.body.v2 + ', дякую за підписку! </h3>';
        emailService.send(hasCame.body.v3, hasCame.body.v4, html, function(callback){
            if(callback == 1){console.log("email is good");}
            else {console.log("email is bad");}});
//------prepare and insert data to db
        M.insert("message", hasCame, function(callback){toSend(callback)});
        console.log("C -> M.insert");

    } else {
        console.log("C -> server decided: I DONT KNOY ");
    }
}

module.exports = {
    send: function(hasCame, callback){
        console.log("C -> hasCame from V: " + hasCame.body.v1);
        serevThink(hasCame, function(toSend){
            console.log("C -> send to V: " + JSON.stringify(toSend));
            callback(toSend);
        });
    }
};