const http = require("http");
const url = require("url");

// console.log(http);

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    const q = url.parse(req.url);
    // const text = "Myself " + q.name + " I am from " + q.location;
    // res.write();
    console.log(q, "q");
    res.end("gf");
    // console.log(req);
    res.end();
  })
  .listen(1000);
