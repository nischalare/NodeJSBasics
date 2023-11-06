 // Import the http module to create an HTTP server.
const http = require('http');

// Import the url module
const url = require('url');

// Create an HTTP server that will handle incoming requests.
const server = http.createServer((req, res) => {
  // Parse the request URL to extract the path and query parameters.
  const parsedUrl = url.parse(req.url, true);

  // Extract the request URL.
  const path = parsedUrl.pathname;
  const queryParams = parsedUrl.query;

  // Define different routes and their corresponding handlers.
  if (path === '/') {
    // Root route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the root route!');
  } else if (path === '/about') {
    // About route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the about route.');
  } else if (path === '/contact') {
    // Contact route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Contact us at support@niraleetechnologies.com');
  } else if (path === '/data') {
    // Data route
    if (req.method === 'GET') {
      // Handle a GET request to /data
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(queryParams));
    } else if (req.method === 'POST') {
      // Handle a POST request to /data
      let requestData = '';
      req.on('data', (chunk) => {
        requestData += chunk;
      });

      req.on('end', () => {
        // Parse and respond with the request body data
        try {
          const requestBody = JSON.parse(requestData);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(requestBody));
        } catch (error) {
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          res.end('Invalid JSON data');
        }
      });
    }
  } else {
    // Route not found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
});

 // Event listener for the 'finish' event
 server.on('request', (req, res) => {
    res.on('finish', () => {
      console.log(`Requested URL: ${req.url}`);
      console.log(`Response HTTP Status Code: ${res.statusCode}`);
    });
  });
  
// Specify the port where the server will listen for incoming requests.
const port = 7000;

// Start the server and listen on the specified port.
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Root route:
// URL: http://localhost:7000/

// About route:
// URL: http://localhost:7000/about

// Contact route:
// URL: http://localhost:7000/contact

// Data route (GET request with query parameters):
// URL: http://localhost:7000/data?param1=value1&param2=value2
//      http://localhost:7000/data?name=nischal&age=29

// Use this URL to send a GET request with query parameters.

// Data route (POST request with JSON data):
// URL: http://localhost:7000/data
// Use this URL to send a POST request with JSON data in the request body.