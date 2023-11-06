// Import the http module to create an HTTP server.
const http = require('http');
// Import the url module
const url = require('url');

// Create an HTTP server that will handle incoming requests.
const server = http.createServer((req, res) => {

  // Parse the request URL to extract the path.
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

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
const port = 6000;

// Start the server and listen on the specified port.
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// You can access these routes by using the specified URLs:
// - Root route: http://localhost:6000/ 
// - About route: http://localhost:6000/about
// - Contact route: http://localhost:6000/contact
// - Route not found (for any other path): http://localhost:6000/anyotherroute 
