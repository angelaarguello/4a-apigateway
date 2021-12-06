const serverConfig = require('../server');
const { RESTDataSource } = require('apollo-datasource-rest');

class AccountAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL= serverConfig.auth_api_url;
    }
    async pacientByIdRequest(pacientId){
        return await this.get(`/usuarios/pacientes/${pacientId}`)
    }

    async updatePacientByIdRequest(updatepaciente){
        updatepaciente= new Object(JSON.parse(JSON.stringify(updatepaciente)))
        let userid= updatepaciente.userId
        return await this.put(`/usuarios/pacientes/update/${userid}/`,updatepaciente)
    }
}

module.exports =AccountAPI