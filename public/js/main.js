function send(value){
    console.log("send: " + value)
    $.post(value,
    {
        v: value
    },
    function(data, status){
        // alert("Data: " + data + "\nStatus: " + status);
        console.log('about post AJAX res: ' + data);
        document.getElementById('wrap').innerHTML = data.inner;
    });

}
