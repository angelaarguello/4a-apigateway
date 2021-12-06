//no se agregar los mutation porque de momento solo se hacen queries. Pendiente de agregar

const horarioResolvers = {
    Query: {
        horarioByDocument: async (_, {documento}, {dataSources}) => {
            return await dataSources.horarioAPI.HorarioByDocumentRequest(documento);
        }
    }
}

module.exports = horarioResolvers;