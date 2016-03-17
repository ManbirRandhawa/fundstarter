var http = require("http");
var fs = require("fs");
  
var data = fs.readFileSync('index.html'); 

http.createServer(function(request, response){
response.writeHeader(200, {"Content-Type": "text/html"});
console.log("it worked");
response.write(data);
console.log("Loaded the Page!");
response.end();
}).listen(8080);



