const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    const parsedUrl1 = url.parse(req.url, true);
    const queryParams = parsedUrl1.query;
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    if (req.url.startsWith('/greet')){
        const name = queryParams.name || 'Guest';
        res.end(`
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
           <style>
            body{
                text-align:center;
                margin-top: 50px;
            }
            .greeting{
                color : red;
            }
           </style>
          </head>
          <body>
            <div class="greeting">Welocme To ${name} BEE Training @ Chitkara  </div>
          </body>
        </html>
        `);
    } else{
        res.end('Invalid url or param given in the route\n');
    }
});
const port = 3030;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
// http://localhost:3030/greet?name=NischalAremanda