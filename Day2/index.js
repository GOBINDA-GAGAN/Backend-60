const http = require("http");

const myServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" }); 
  res.end(
    JSON.stringify({
      message: "Hello from Server!",
      timestamp: new Date().toISOString(),
    })
  );
});

const PORT = 8080;
myServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

