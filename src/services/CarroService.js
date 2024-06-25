const { buscartodos } = require('../controllers/CarroController');
const db = require('../db');

module.exports ={
    buscartodos: () =>{
        return new Promise((aceito, rejeitado)=>{
          
            db.query('SELECT * FROM carros', (error,results)=>{
               if(error){
                rejeitado(error); return;
               } 
               else{
                aceito(results)
               }
               
            })
            
        }) 
    }
}