//// Server
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === "/" || path === "/overview") {
    res.end("This is the overview");
  } else if (path === "/items") {
    res.end("This is the item section");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is Listening to port 8000");
});
