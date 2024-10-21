// //creating a node server
// let http = require('http')

// // Create a server and handle incoming requests
// let server = http.createServer((req, res) => {
//     console.log(req);
//     process.exit(); 
//process.exit() mothod stpops the nodejs server instantly.
// })

// server.listen(3000)


//creating a node server
// let http = require('http')

// // Create a server and handle incoming requests
// let server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     // process.exit()
// })

// server.listen(3000)


//click inspect->network->header(content type visible)->response(resposne visible)
// let http = require('http')
// let server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     // process.exit()
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<html>')
//     res.write('<head><title>MY first Page</title></head>')
//     res.write('<body><h1>MY first Page</h1></body>')
//     res.write('</html>')
//     res.end()
// })
// server.listen(3000)


//assignment
let http = require('http');

let server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');

    if (req.url === '/') {
        res.write('<body><h1>Welcome home</h1></body>');
    } else if (req.url === '/about') {
        res.write('<body><h1>Welcome to About Us page</h1></body>');
    } else if (req.url === '/node') {
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    } else {
        res.write('<body><h1>Page Not Found</h1></body>');
    }

    res.write('</html>');
    res.end();
});

server.listen(3000);