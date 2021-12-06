const {gql} =require('apollo-server');

const accountTypeDef=gql `
    type Account{
        username: String!
        email: String
        firstname: String !
        laststname: String !
    }

    type Paciente{
        user: User        
        edad: Int
        id: Int!
    }

    type User{
            username: String!
            email: String
            id: Int!
            first_name: String
            last_name: String
    }
    input updateInput{
        userId: Int!
        edad: Int!
    }
    type Query{
        pacientById(pacientId:Int!):Paciente
        
    }

    type Mutation{
        updatePacient(updatepaciente:updateInput!):Paciente        
    }
   `;

   module.exports = accountTypeDef;