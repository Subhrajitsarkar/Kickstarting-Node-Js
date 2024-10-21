let http = require('http');

const routes = require('./routes')

// let server = http.createServer(routes)

console.log((routes.someText));
let server = http.createServer(routes.handler)

server.listen(3000)
