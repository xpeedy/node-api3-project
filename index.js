// require your server and launch it

const server = require("./api/server")

server.listen(5000, () => {
    console.log("server runnig on http://localhost:5000")
})