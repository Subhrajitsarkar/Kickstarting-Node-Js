// let http = require('http')

// let server = http.createServer((req, res) => {
//     let url = req.url;
//     if (url === '/') {
//         res.write('<html>')
//         res.write('<head><title>Enter Message</title></head>')
//         res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></input></form></body>")
//         res.write('</html>')
//         return res.end()
//     }
//     //when i click submit button it will redirect to http://localhost:3000/message... as this url is not defind here that's why it will show Welcome to my Node Js project
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Welcome to my Node Js project</h1></body>');
//     res.write('</html>');
//     res.end();
// })
// server.listen(3000)


// let http = require('http');
// let fs = require('fs')

// let server = http.createServer((req, res) => {
//     let url = req.url;
//     let method = req.method;
//     if (url === '/') {
//         res.write('<html>')
//         res.write('<head><title>Enter Message</title></head>')
//         res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></input></form></body>")
//         res.write('</html>')
//         return res.end()
//     }
//     if (url === '/message' && method === 'POST') {
//         fs.writeFileSync('8.txt', 'Hello from Node js') //it will create a file named 8.txt...inside that text will be Hello from Node js
//         res.statusCode = 302;
//         res.setHeader('Location', '/')
//         return res.end()
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Welcome to my Node Js project</h1></body>');
//     res.write('</html>');
//     res.end();
// })
// server.listen(3000)


// let http = require('http');
// let fs = require('fs')

// let server = http.createServer((req, res) => {
//     let url = req.url;
//     let method = req.method;
//     if (url === '/') {
//         res.write('<html>')
//         res.write('<head><title>Enter Message</title></head>')
//         res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></input></form></body>")
//         res.write('</html>')
//         return res.end()
//     }
//     if (url === '/message' && method === 'POST') {
//         let body = []
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk)
//         })
//         req.on('end', () => {
//             let parseBody = Buffer.concat(body).toString()
//             let message = parseBody.split('=')[1]
//             fs.writeFileSync('message.txt', message)
//         })
//         res.statusCode = 302;
//         res.setHeader('Location', '/')
//         return res.end()
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Welcome to my Node Js project</h1></body>');
//     res.write('</html>');
//     res.end();
// })
// server.listen(3000)



// let http = require('http');
// let fs = require('fs')

// let server = http.createServer((req, res) => {
//     let url = req.url;
//     let method = req.method;
//     if (url === '/') {
//         res.write('<html>')
//         res.write('<head><title>Enter Message</title></head>')
//         res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></input></form></body>")
//         res.write('</html>')
//         return res.end()
//     }
//     if (url === '/message' && method === 'POST') {
//         let body = []
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk)
//         })
//         return req.on('end', () => {
//             let parseBody = Buffer.concat(body).toString()
//             let message = parseBody.split('=')[1]
//             fs.writeFileSync('message.txt', message)
//             res.statusCode = 302;
//             res.setHeader('Location', '/')
//             return res.end()
//         })
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Welcome to my Node Js project</h1></body>');
//     res.write('</html>');
//     res.end();
// })
// server.listen(3000)




// let http = require('http');
// let fs = require('fs')

// let server = http.createServer((req, res) => {
//     let url = req.url;
//     let method = req.method;
//     if (url === '/') {
//         res.write('<html>')
//         res.write('<head><title>Enter Message</title></head>')
//         res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></input></form></body>")
//         res.write('</html>')
//         return res.end()
//     }
//     if (url === '/message' && method === 'POST') {
//         let body = []
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk)
//         })
//         return req.on('end', () => {
//             let parseBody = Buffer.concat(body).toString() // All the data chunks are combined into one buffer, and then converted into a string using .toString(). The resulting string is message=my+name+is+sona.
//             let message = parseBody.split('=')[1] // Extract the message part (after '=' sign). The string message=my+name+is+sona is then split using split('='), which splits it into two parts: "message" and "my+name+is+sona". The split('=')[1] gives us "my+name+is+sona"
//             fs.writeFile('message.txt', message, (err) => {
//                 res.statusCode = 302;
//                 res.setHeader('Location', '/') //The server redirects the user back to the root page after saving the message.
//                 return res.end()
//             })
//         })
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Welcome to my Node Js project</h1></body>');
//     res.write('</html>');
//     res.end();
// })
// server.listen(3000)


//assignment
let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
    let url = req.url;
    let method = req.method;

    if (url === '/') {
        fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log('Data from file: ' + data);
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body><p>${data}</p>`);  // Display message data from file
            res.write("<form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form>");
            res.write('</body></html>'); // Use a single body tag
            return res.end();  // End the response here to avoid fallthrough
        });
    } else if (url === '/message' && method === 'POST') {
        let body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            let parseBody = Buffer.concat(body).toString();
            let message = parseBody.split('=')[1];

            // Write message to message.txt
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;  // Redirect to home page
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    else { // Default case if no route matches
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(3000);
