const {gql} = require('apollo-server');

const horarioTypeDefs = gql`
    type Horario{
        documento:  String!
        nombres: String!
        jornada: String!
        hora: String!
        fecha: String
    }

    type Query{
        horarioByDocument(documento: String!): Horario
        getAllHorarios: [Horario]
    }
`;

module.exports = horarioTypeDefs