/* Use require to import modules */
var http = require("http");

/* Create HTTP server */
http.createServer(function(request, response){

  /* Create http header with content-type `text/plain` */
  response.writeHead(200, {'Content-Type': 'text/plain'});

  /* Set response body to Hello World */
  response.end("Hello World\n");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");
