const horarioTypeDefs = require('./horario_type_def');
const authTypeDefs = require('./auth_type_def');

//Acá se deben agregar los demás typeDefs, unir los demás al arreglo (nombre de la variable de arriba )
const schemasArray = [horarioTypeDefs, authTypeDefs];

module.exports = schemasArray;