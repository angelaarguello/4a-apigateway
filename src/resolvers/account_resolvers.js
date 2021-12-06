const accountResolvers ={
    Query:{
        pacientById: async(_,{pacientId},{dataSources})=>{
            return await dataSources.accountAPI.pacientByIdRequest(pacientId);
        }
    }
   , Mutation:{
    updatePacient: async(_,{updatepaciente},{dataSources})=>{
            return await dataSources.accountAPI.updatePacientByIdRequest(updatepaciente);
        }
    }

};
module.exports=accountResolvers