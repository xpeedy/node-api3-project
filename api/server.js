const express = require('express');

const server = express();

// remember express by default cannot parse JSON in request bodies

// global middlewares and routes need to be connected here
const usersRouter = require("./users/users-router")
const postsRouter = require("./posts/posts-router")
const mw = require("./middleware/middleware")

server.use("/api/posts", postsRouter)
server.use("/api/users", usersRouter)

server.get('/',mw.logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
