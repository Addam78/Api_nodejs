const express = require('express')
const router = express.Router()

const CarroController = require('./controllers/CarroController')//Para enxergar o arquivo carro controller, organização de projeto

router.get('/carros', CarroController.buscartodos)

module.exports = router;