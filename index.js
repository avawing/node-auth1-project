const express = require('express')
const server = express()

const port = process.env.PORT || 4004;

server.listen(port, ()=> console.log(`I am listening: ${port}`))