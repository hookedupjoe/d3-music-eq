var express = require('express');
var app = express();

app.use(express.static('http'));

var server = app.listen(process.env.PORT ||7007, function () {
    var host = server.address().address ;
    var port = server.address().port;
    console.log("Simply web server running on http://%s:%s", host, port)
});