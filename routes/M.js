var credentials = require('../credentials.js');
var M_mongodb = require('../lib/M_mongodb.js');




module.exports = { 
    insert: function(hasCam, callback) {
        console.log("M -> address to M_nomgodb.insert()");

    },
    show: function(hasCam, collback) {
        console.log("M -> address to M_nomgodb.show()");

    },
    count: function(callback) {
        console.log("M -> address to M_nomgodb.count()");
        M_mongodb.count(function(toSend){
                console.log("M -> send number of conferenceApps to V: " + toSend);
                callback(toSend);
            })
    }
}
