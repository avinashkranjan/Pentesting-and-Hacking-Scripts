#!/usr/bin/env python

import http.server
import socketserver

print(
    """
	*--------------------------------------*
	|       programmed by : Kalivarapubindusree       |
	|           		           		 |
	*--------------------------------------*
	   _                _    _       _     
	  | |__   __ _  ___| | _| | __ _| |__  
	  | '_ \ / _` |/ __| |/ / |/ _` | '_ \ 
	  | | | | (_| | (__|   <| | (_| | |_) |
	  |_| |_|\__,_|\___|_|\_\_|\__,_|_.__/ 
	
	           SimpleHTTPServer
	           ----------------

	"""
)

port = 4444

server = http.server.SimpleHTTPRequestHandler
request = socketserver.TCPServer(("", port), server)
print("server is up ....", port)
request.serve_forever()
