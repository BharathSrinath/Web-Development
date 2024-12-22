const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Connected to the server");
});

app.use(
  "/",
  (req, res, next) => {
    res.send("1");
    next();
  },
  (req, res, next) => {
    res.send("2");
  },
  (req, res, next) => {
    res.send("3");
  }
);

// Here when the first middleware function is executed "1" will be printed and thats it. The next middlewares are ignored.
// To executed them, the 'next' function should be called.
// But one request can have only one response. So now when you call next() after res.send("1"), you will get an error as follows. 
    // "Cannot set headers after they are sent to the client"
    // In other words a defined route can have only one res.send().