const http = require("http");
const fs=require("fs");

const myServer = http.createServer((req, res) => {
  const log = `[${new Date().toISOString()}] - ${req.method} ${req.url} - New Request Received\n`;

  fs.appendFile("access.log", log + "\n", (err) => {
    if (err) {
      console.error("Error writing to access.log", err);
      return;
    }
    res.end("Hello World!");
    
  });
});

const PORT = 8080;
myServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
