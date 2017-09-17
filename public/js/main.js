var rout = "home";
var routPrew = ""
function onRout(onRoutValue){
    routPrew = rout
    rout = onRoutValue;
    document.getElementById(onRoutValue).classList.toggle('noVisible');
    document.getElementById(routPrew).classList.toggle('noVisible');
    console.log("onRout: " + onRoutValue)
    $.post(onRoutValue,
    {
        v1: onRoutValue
    },
    function(data, status){
        var resJSON = JSON.stringify(data);
        console.log('onRout res: ' + resJSON);
    });
}

function sendMessage(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    console.log("sendMessage " + name + " " + email + " " + message);
    send("message", name, email, message);
}

function send(value1, value2, value3, value4) {
    console.log('sending: ' + value1 + " " + value2 + " " + value3 + " " + value4);
    if(value1 == message){sendMessage();}
    if(value2 == undefined){value2 = "value2"};
    if(value3 == undefined){value3 = "value3"};
    if(value4 == undefined){value4 = "value4"};
    console.log('sending: ' + value1 + " " + value2 + " " + value3 + " " + value4);
    $.post(value1,
    {
        "v1": value1,
        "v2": value2,
        "v3": value3,
        "v4": value4
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
        var resJSON = JSON.stringify(data);
        console.log('send response: ' + resJSON);
        document.getElementById(value1).innerHTML = data.v2;
    });
}

window.onload = function() {
    if(rout == "home"){
        var value = "countConferenceApplication";
        console.log("send: " + value)
        send(value);
        // alert( document.cookie );
    }
}