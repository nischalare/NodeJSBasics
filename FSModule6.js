 // Import the http module to create an HTTP server.
const http = require('http');

// Import the url module
const url = require('url');

// Import the file system module
const fs = require('fs');

// Create an HTTP server that will handle incoming requests.
const server = http.createServer((req, res) => {
  // Parse the request URL to extract the path and query parameters.
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
  } else if (path === '/readfile') {
    // Read and respond with the contents of a file
    fs.readFile('sample.txt', 'utf8', (error, data) => {
      if (error) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  } else if (path === '/writefile') {
    // Write data to a file
    const dataToWrite = 'This data will be written to a file.';
    fs.writeFile('sample.txt', dataToWrite, (error) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error writing to the file');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Data written to file successfully');
      }
    });
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
const port = 8000;

// Start the server and listen on the specified port.
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Root route: http://localhost:8000/  
// About route: http://localhost:8000/about  
// Contact route: http://localhost:8000/contact  
// Read file route: http://localhost:8000/readfile  
// Write file route: http://localhost:8000/writefile  