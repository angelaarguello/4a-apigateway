const horarioResolvers = require('./horario_resolvers');
const authResolver = require('./auth_resolvers');

const lodash = require('lodash');

//Acá se deben pasar todos los resolvers que se quieren unir, agregar los demás (el nombre de la variable arriba)
const resolvers = lodash.merge(horarioResolvers, authResolver);

module.exports = resolvers;