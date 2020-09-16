const db = require('./knexconfig')

function register(user){
    return db('users').insert(user)
    .then(id =>{
        return findById(id[0])
    })
    .catch(err => {
        return err
    })
}

function findBy(username){
    return db('users').where({username})
}

function findById(id){
    return db('users').where({id}).select('username')
}

function get(){
    return db('users').select('username')
}




module.exports = {findBy, register, get}