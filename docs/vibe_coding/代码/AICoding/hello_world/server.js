const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="UTF-8"><title>Hello</title></head>
<body><h1>hello ai codeing</h1></body>
</html>`);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
