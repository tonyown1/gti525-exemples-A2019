// Serveur pour le client AJAX du cours sur AJAX

var http = require("http");
if (! http) process.exit(1);

var fs = require("fs");
if (! fs) process.exit(2);

var backend = "http://teaching-api.juliengs.ca/gti525/"

// HTTP get -- Exemple
/*
http.get("URL...", function(res) {
  res.on("data", function(blob) {

  });
  res.on("end", function() {

  });
  res.on("error", function(err) {

  });
}
*/

var serveRequest = function(request, response) {

}

// Démarre le serveur sur le port demandé et configure la réponse
var port = 8080;
var server = http.createServer(serveRequest);
server.listen(port);
console.log("Démarrage du serveur sur le port: " + port);
