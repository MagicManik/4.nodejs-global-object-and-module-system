const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello programmers!');
        res.write('How are you doning?');
        res.end();
    } else if (req.url === '/about-us') {
        res.write('This is about us page');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});

// server.on('connection', () => {
//     console.log('New connection ...');
// });

server.listen(5000);

console.log('listening on port 5000');
