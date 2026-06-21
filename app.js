const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.send("Hello from Jenkins CI/CD!");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});