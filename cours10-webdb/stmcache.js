// Serveur pour le client AJAX du cours sur AJAX

var http = require("http");
if (! http) process.exit(1);

var fs = require("fs");
if (! fs) process.exit(2);

var path="";

var cache = {};
var backend = "http://teaching-api.juliengs.ca/gti525/"

var serveRequest = function(request, response) {
	if ( request.url.startsWith("/STMLines.py") || request.url.startsWith("/STMStops.py") || request.url.startsWith("/STMArrivals.py") || request.url.startsWith("/STMPositions.py") ) {

		var parsedurl = request.url.split("/")[1];
    response.writeHead(200, {"Content-Type": "application/json"});
    var realurl = backend + parsedurl;

    if (realurl in cache) {
      response.write(cache[realurl]);
      response.end();
      console.log("Envoi via le cache: " + realurl);
    } else {

      var totalblob = "";

      http.get(realurl, function(res) {
        res.on("data", function(blob) {
          response.write(blob);
          if (totalblob == "")
            totalblob = blob;
          else {
            totalblob += blob;
          }
        });
        res.on("end", function() {
          response.end();
          cache[realurl] = totalblob;
          console.log("Envoi via le backend et placé en cache: " + realurl);
        });
        res.on("error", function(err) {
          console.log(err);
          response.statusCode = 500;
        });
      });
    }

	} else {
		response.write("Requête inconnue: " + request.url);
		response.statusCode = 404;
		response.end();
	}
};


// Démarre le serveur sur le port demandé et configure la réponse
var port = 8080;
var server = http.createServer(serveRequest);
server.listen(port);
console.log("Démarrage du serveur sur le port: " + port);
