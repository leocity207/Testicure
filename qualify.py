import xml.etree.ElementTree as ET
import json
import os
from config import Get_Config
import mimetypes
from http.server import BaseHTTPRequestHandler, HTTPServer


FILES_NAME = ["requirement.xml", "test-case.xml", "test-dimension.xml", "test.xml"]
CURRENT_PATH = os.path.dirname(os.path.abspath(__file__))
RESOURCE_PATH = os.path.join(CURRENT_PATH, "resources")

# Parse XML file

class CustomHandler(BaseHTTPRequestHandler):
	def do_GET(self):
		file_path = os.path.join(RESOURCE_PATH, self.path.lstrip("/"))
		if os.path.isfile(file_path):
			self.send_response(200)
			mime_type, _ = mimetypes.guess_type(file_path)
			self.send_header("Content-type", mime_type or "application/octet-stream")
			self.end_headers()
			with open(file_path, "rb") as file:
				self.wfile.write(file.read())
		elif(self.path[0:5] == "/file"):
			file_path = os.path.join(os.path.join(CURRENT_PATH,Get_Config()["RelativePath"]),self.path[6:])
			self.send_response(200)
			mime_type, _ = mimetypes.guess_type(file_path)
			self.send_header("Content-type", mime_type or "application/octet-stream")
			self.end_headers()
			with open(file_path, "rb") as file:
				self.wfile.write(file.read())
		else:
			self.send_response(404)
			self.end_headers()
			
# Main function to process XML files and generate HTML
if __name__ == "__main__":
	config = Get_Config()
	server_address = ('', 8888)
	httpd = HTTPServer(server_address, CustomHandler)
	print("Serving on port 8888...")
	httpd.serve_forever()
	