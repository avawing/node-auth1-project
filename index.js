const express = require('express')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const db = require('./knexconfig')

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
server.post('/api/login', (req, res) => {
    let { username, password } = req.body;
    const credentials = req.body;

// find the user in the database by it's username then
if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
  return res.status(401).json({ error: 'Incorrect credentials' });
}
  
    users.findBy({ username })
      .first()
      .then(user => {
        // check that passwords match
        if (user && bcrypt.compareSync(password, user.password)) {
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          // we will return 401 if the password or username are invalid
          // we don't want to let attackers know when they have a good username
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  server.post('/api/register', (req, res)=>{
      const credentials = req.body;
      const hash = bcrypt.hashSync(credentials.password, 14);
      credentials.password = hash;
  })

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