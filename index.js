const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello!\n");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/`);
});
