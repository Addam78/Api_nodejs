const CarroService = require('../services/CarroService') //Para enxergar tudo que for feito no carro service onde são feitas as regras do banco de dados

module.exports ={
    buscartodos : async(req,res)=>{
        let json = {error: '', result:[]}

        let carros = await CarroService.buscartodos()

        for (let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo,
                //moddelo : carros[i].placa
            })
        
        }
        res.json(json)
    }
}