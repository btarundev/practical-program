const http = require("node:http");

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  if (request.method === "GET" && request.url === "/api/health") {
    response.writeHead(200);
    response.end(JSON.stringify({ status: "ok" }));
    return;
  }
  response.writeHead(404);
  response.end(JSON.stringify({ error: "Not found" }));
});

server.listen(3000, () => console.log("Server running at http://localhost:3000"));
