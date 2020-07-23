const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request, response){

        const {name, email, wpp, city, uf} = request.body;
        //console.log(data);
        const id = crypto.randomBytes(4).toString('HEX')

        //vai esperar o codigo finalizar
        await connection('ongs').insert({id, name, email, wpp, city, uf});
        return response.json({id});
    },

    async index(request,response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    
    }

}