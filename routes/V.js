var apply = require('../routesJSON/apply.json');
var about = require('../routesJSON/about.json');
var home = require('../routesJSON/home.json');
var contacts = require('../routesJSON/contacts.json');

module.exports = {
    send: function(req, callback){
        console.log("V.send()IN: " + req);
        if(req == "home"){
            callback(home);
        } else if(req == "apply") {
            callback(apply);
        } else if(req == "about") {
            callback(about);
        } else if(req == "contacts") {
            callback(contacts);
        }
    }
}
