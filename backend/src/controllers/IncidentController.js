const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request, response){

        const {title, description, value} = request.body;
        request.headers; //contexto, autenticacao
        const ong_id = request.headers.authorization;



        //vai esperar o codigo finalizar
        const [id] = await connection('incidents').insert({title, description, value,ong_id});
        return response.json({id});
    },

    async index(request,response){
        const {page = 1} = request.query;

        const [count] = await connection('incidents');

        
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id','=','incidents.ong_id')
        .limit(5)
        .offset((page - 1)*5)
        .select([
            'incidents.*','ongs.name','ongs.email','ongs.wpp','ongs.city','ongs.uf'
        ]);
        response.header('X-Total-Count', count['count(*)'])
        return response.json(incidents);
    
    },

    async delete(request,response){
        const {id} = request.params;
        const  ong_id = request.headers.authorization;

        const incident = await connection('incidents').where('id',id).select('ong_id').first();
        if(incident.ong_id != ong_id){
            return response.status(401).json({error: 'nao permitido'});
        }

        await connection('incidents').where('id',id).delete();
        return response.status(204).send();

    }   

}