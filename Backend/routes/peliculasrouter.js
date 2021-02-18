const express = require('express')
const peliculasRouter = express.Router()

peliculasRouter.route('/peliculas')
    .get((req, res)=>{
        console.log('aca estamos dentro de peliculas GET')
        res.send({'peliculas':[]})        
    })
    .post((req, res)=>{
        throw new Error('hubo un error')

        res.send({verbo:'post'})
    })
    .put(()=>{})
    .delete(()=>{})

module.exports = peliculasRouter
   