var http = require("http");
var fs = require("fs");

var port = process.env.PORT || 8080;

fs.readFile('index.html', function (err,data)
{
if (err)
{
throw err;
}

http.createServer(function(request, response){
response.writeHeader(200, {"Content-Type": "text/html"});
console.log("it worked");
response.write(data);
console.log("Loaded the Page!");
response.end();
}).listen(port);
});


