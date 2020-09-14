const express = require('express')
const bcrypt = require('bcryptjs')
const session = require('express-session')

const server = express()
server.use(express.json())

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

  server.get('/api/users', protected, (req, res) => {
    db('users') 
      .then(users => res.json(users))
      .catch(err => res.json(err));
  });
  
server.get('/api/logout', (req, res) =>{
    if (req.session){
        req.session.destroy(err=>{
            if(err){
                res.send("Error Logging Out").end()
            }else{
                res.send("Bye Bye")
            }
        })
    }
})

function protected(req, res, next) {
    if (req.session && req.session.userId) {
      next();
    } else {
      res.status(401).json({ message: 'you shall not pass!!' });
    }
  }



const port = process.env.PORT || 4004;

server.listen(port, ()=> console.log(`I am listening: ${port}`))