//// Server
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.send("Hello i am server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is Listening to port 8000");
});
