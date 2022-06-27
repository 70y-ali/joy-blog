const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/plain');

    res.write('hello there');
    res.end();
});

// localhost is like domain name on the web
// port number is like door into a computer
server.listen(3000, 'localhost', () => {
    console.log('listening for req on port 3000')
})