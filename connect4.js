const http = require('http')
const url = require('url')

const server = http.createServer();

server.on('request', (request, response) => {
    response.writeHead(200, {'Content-type': 'text/html'});
    let q = url.parse(request.url, true);
    console.log(q);
    response.end(handleUserAction(q));
});

server.on('request', (request, response) => {
    const {method, url} = request;
    console.log("logging: " + method + " url " + url);
});

server.on('error', error=> console.error(error.stack));

server.listen(3000, '127.0.0.1', ()=>console.log("Hello World from server"));

function handleUserAction(urlStr) {
    // parse request from pathname
    let clienturl = urlStr.split("/");
    let returnString = "";
    if (clienturl[1] == 'gameboard') {
        returnString = "gameboard";
    } else if (clienturl[1] == 'move') {
        returnString = "move";
    } else {
        returnString = "";
    }

    return returnString;
};