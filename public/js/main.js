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

function send(value1, value2, value3) {
    console.log('sending: ' + value1 + " " + value2 + " " + value3);
    if(value2 == undefined){value2 = "value2"}
    if(value3 == undefined){value3 = "value3"}
    console.log('sending: ' + value1 + " " + value2 + " " + value3);
    $.post(value1,
    {
        "v1": value1,
        "v2": value2,
        "v3": value3
    },
    function(data, status){
        // alert("Data: " + data + "\nStatus: " + status);
        var resJSON = JSON.stringify(data);
        console.log('send response: ' + resJSON);
        document.getElementById(value1).innerHTML = data.inner;
    });
}

window.onload = function() {
    if(rout == "home"){
        var value = "count";
        console.log("send: " + value)
        send(value);
    }
}
