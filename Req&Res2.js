const http = require('http');
const server = http.createServer((req, res) => {
    // Request event
    // Example 1 -> send a basic response for the root path '/'
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is "/" -> the root path of our URL');
        res.end();
    }
    // Example 2 -> HTML response
    else if (req.url === '/html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>This is an HTML response coming from "/html" URL</h1></body></html>');
        res.end();
    } else if (req.url === '/redirect') {
        res.writeHead(302, { 'Location': 'http://example.com' });
        res.end();
    }
});
// Event listener for the 'finish' event
server.on('request', (req, res) => {
    res.on('finish', () => {
        console.log(`Requested URL: ${req.url}`);
        console.log(`Response HTTP Status Code: ${res.statusCode}`);
    });
});
const port = 4000;
server.listen(port, () => {
    console.log(`Server is Running Successfully on port ${port}`);
});


// - http://localhost:4000/  (It should display "Welcome to the root path!")
// - http://localhost:4000/html  (It should display an HTML message.)
// - http://localhost:4000/redirect  (It should redirect to the `/html` route.)