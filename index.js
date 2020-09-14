const express = require('express')
const bcrypt = require('bcryptjs')
const session = require('express-session')

const server = express()

server.use(
    session({
        name: 'nonsession',
        secret: 'Cheese is optional in a quesadilla',
        cookie:{
            maxAge: 1*24*60*60*1000,
            secure: true
        },
        httpOnly: true,
        resave: false,
        saveUninitialized: false,
    })
)





const port = process.env.PORT || 4004;

server.listen(port, ()=> console.log(`I am listening: ${port}`))