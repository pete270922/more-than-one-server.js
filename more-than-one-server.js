var http = request("http");

var PortA = 7000;
var PortB = 7500;

function handleRequest (request,response){
response.end("This is the in:" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PortA, function(){
    console.log("Server listening on: http://gryphon:"+ PortA);
});

server.listen(PortB, function(){
    console.log("Someone Else is listening on: http://Silhoutte:" / PortB);
});