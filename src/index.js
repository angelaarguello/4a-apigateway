const {ApolloServer} = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const HorarioAPI = require('./dataSources/horario_api');
const AuthAPI = require('./dataSources/auth_api');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        horarioAPI: new HorarioAPI(),
        authAPI: new AuthAPI()
    }),
    introspection: true,
    playground: true
})

server.listen(process.env.PORT || 40000).then(({url})=>{
    console.log(`Server ready at ${url}`);
})