let fs = require('fs')

const requestHandler = (req, res) => {
    let url = req.url;
    let method = req.method;
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></input></form></body>")
        res.write('</html>')
        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        let body = []
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        })
        return req.on('end', () => {
            let parseBody = Buffer.concat(body).toString()
            let message = parseBody.split('=')[1]
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    res.end();
}

// module.exports = requestHandler


// module.exports = {
//     handler: requestHandler,
//     someText: 'This is some text'
// }


// module.exports.handler = requestHandler;
// module.exports.someText = 'This is some text'


exports.handler = requestHandler;
exports.someText = 'This is some text'