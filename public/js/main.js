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
        onRout: onRoutValue
    },
    function(data, status){
        // alert("Data: " + data + "\nStatus: " + status);
        var resJSON = JSON.stringify(data);
        console.log('onRout res: ' + resJSON);
        // document.getElementById('wrap').innerHTML = data.inner;
    });
}

function send(value) {
    console.log("send: " + value)
    $.post(value,
    {
        send: value
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
        var resJSON = JSON.stringify(data);
        console.log('send response: ' + resJSON);
        document.getElementById(value).innerHTML = data.inner;
    });

}
