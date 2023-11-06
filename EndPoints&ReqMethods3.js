 // Import the http module to create an HTTP server.
 const http = require('http');

 // Create an HTTP server that will handle incoming requests.
 const server = http.createServer((req, res) => {
   // Extract the HTTP request method and the request URL.
   const method = req.method;
   const url = req.url;
 
   // Handle different endpoints and request methods.
 
   // If the request method is GET, handle the following:
   if (method === 'GET') {
     // Example 1: Handling a GET request for the root path '/'
     if (url === '/') {
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       res.end('GET request to the root path.');
     } else if (url === '/info') {
       // Example 2: Handling a GET request for '/info'
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       res.end('GET request to the /info endpoint.');
     }
   } else if (method === 'POST') {
     // Example 3: Handling a POST request
     if (url === '/create') {
       res.writeHead(201, { 'Content-Type': 'text/plain' });
       res.end('POST request to create a resource.');
     }
   } else if (method === 'PUT') {
     // Example 4: Handling a PUT request
     if (url === '/update') {
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       res.end('PUT request to update a resource.');
     }
   } else if (method === 'DELETE') {
     // Example 5: Handling a DELETE request
     if (url === '/delete') {
       res.writeHead(204, { 'Content-Type': 'text/plain' });
       res.end('DELETE request to delete a resource.');
     } else {
       // Handling unsupported methods or routes with a 405 response.
       res.writeHead(405, { 'Content-Type': 'text/plain' });
       res.end('Method Not Allowed');
     }
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
 const port = 5000;
 
 // Start the server and have it listen on the specified port.
 server.listen(port, () => {
   console.log(`Server is listening on port ${port}`);
 });
 
 
 // use postman to check url output
 
 // Handling a GET request to the root path ('/') and '/info'.
 // http://localhost:5000/
 // http://localhost:5000/info
 
 // Handling a POST request to '/create'.
 // http://localhost:5000/create
 
 // Handling a PUT request to '/update'.
 // http://localhost:5000/update
 
 // Handling a DELETE request to '/delete'.
 // http://localhost:5000/delete 
