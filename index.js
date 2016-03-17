var http = require("http");
var fs = require("fs");
var fileName = 'index.html';

var port = process.env.PORT || 8080;

http.createServer(function(request, response){
    response.writeHeader(200, {"Content-Type": "text/html"});
console.log("it worked");
fs.exists(fileName, function(exists){
    if (exists){
	fs.stat(fileName, function(error, stats){
	    fs.open(fileName, 'r', function(error,fd){
		var buffer = new Buffer(stats.size);
		fs.read(fd, buffer, 0 ,buffer.length,null,function(error,bytesRead, buffer){

		    var data = buffer.toString('utf8', 0, buffer.length);
		    response.write(data);
		    console.log(data);
		    fs.close(fd);
		    response.end();

		});
		});
	    });
	}
       
    
	      
});
	  }).listen(port);
   
