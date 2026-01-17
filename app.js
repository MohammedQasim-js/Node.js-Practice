// // Server Using Node.js
// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   res.writeHead(200, { "content-type": "text/plain" });
//   res.end("Hello World!");
// });

// console.log("Port 3000");

// server.listen(3000, "127.0.0.1");

// // Streams and Buffers
// const http = require("http");
// const fs = require("fs");

// const readStream = fs.createReadStream(__dirname + "/read-me.txt", "utf-8");
// const writeStream = fs.createWriteStream(__dirname + "/write-me.txt");

// readStream.on("data", (chunk) => {
//   console.log("New data received!");
//   console.log(chunk);
//   writeStream.write(chunk);
// });

// readStream.pipe(writeStream);

// const server = http.createServer((req, res) => {
// res.writeHead(200, { "content-type": "text/html" });
// const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");

// readStream.pipe(res);
//   res.writeHead(200, { "content-type": "application/json" });

//   console.log(req.url);

//   const person = {
//     name: "Aladdin",
//     email: "aladdin@gmail.com",
//     job: "Adventurer",
//   };

//   res.end(JSON.stringify(person));
// });

// server.listen(3000, "127.0.0.1");

// // Routing
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url === "/home" || req.url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     fs.createReadStream(__dirname + "/index.html").pipe(res);
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "content-type": "text/html" });
//     fs.createReadStream(__dirname + "/about.html").pipe(res);
//   } else {
//     res.writeHead(200, { "content-type": "text/html" });
//     fs.createReadStream(__dirname + "/404.html").pipe(res);
//   }
// });

// server.listen(3000, "127.0.0.1");

// Express
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  // res.send("Home Page!");
  // res.sendFile(__dirname + "/index.html");
  res.render("partials/index");
});

app.get("/about", (req, res) => {
  // res.send("About Page!");
  // res.sendFile(__dirname + "/about.html");
  console.log(req.query);
  res.render("partials/about", { qs: req.query });
});

app.get("/profile/:name", (req, res) => {
  // res.send("Profile name is " + req.params.name);
  const data = {
    age: 25,
    job: "developer",
    friends: ["Bob", "Alice", "Charlie"],
  };
  res.render("profile", { person: req.params.name, data });
});

app.listen(3000);
