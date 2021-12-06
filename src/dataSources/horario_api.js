const serverConfig = require('../server');
const {RESTDataSource} = require('apollo-datasource-rest');

class HorarioAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.horario_api_url;
    }

    async HorarioByDocumentRequest(documento){
        return await this.get(`/horarios/${documento}`);
    }
}

module.exports = HorarioAPI;