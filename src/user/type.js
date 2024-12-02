import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";



export const userType = new GraphQLObjectType({
    name: 'userType',
    fields:{
        
        name: {type:GraphQLString},
        email: {type:GraphQLString},
        password: {type:GraphQLString},
        role: {type:GraphQLString},
        phone: {type:GraphQLInt},
    
    }
    
})