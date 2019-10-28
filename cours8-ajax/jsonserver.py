#!/usr/bin/python
# Simple HTTP server to test node.js applications with AJAX
# NOTE: This must be invoked on the /client directory


import SimpleHTTPServer
import SocketServer
import random
import json
from time import sleep

PORT = 8091	# Port to connect to

images = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"]
imgCount = 50

class MyRequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
	def do_GET(self):
		if self.path == '/ajax':
			# If it's an AJAX request - send a response

			self.send_response(200)

			self.send_header('Content-type','application/json')
			self.end_headers()

                        count = random.randint(1, 30)
                        obj = {}
                        for i in xrange(0, count):
                                key = random.randint(0, 29)
                                value = images[random.randint(0,len(images)-1)]
                                obj[key] = "images/" + value
                        jsonObj = json.dumps(obj)

			self.wfile.write(jsonObj)
                        return


		else:
			# It's a request for a file - return the file
			return SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

Handler = MyRequestHandler
server = SocketServer.TCPServer(('0.0.0.0', PORT), Handler)
print "Starting server on port",PORT
server.serve_forever()
