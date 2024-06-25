require('dotenv').config({path:'variaveis.env'})
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const server = express()
server.use(cors())
server.use(bodyParser.urlencoded({extended:false}))


// app.use((req, res, next) =>{
//     res.header('Access-Control-Allow-Origin', 'resttesttest.com')
// })






server.use('/api', routes) //Todos enderços das rotas terão o prefixo /api

server.listen(process.env.PORT, () =>{
    console.log(`Servidor rodoando em : http://localhost:${process.env.PORT}`)
})