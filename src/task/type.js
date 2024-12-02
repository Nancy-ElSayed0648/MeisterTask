import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";



export const taskType = new GraphQLObjectType({
    name: 'taskType',
    fields:{
        
        title: {type:GraphQLString},
        description: {type:GraphQLString},
        User:{type:GraphQLID}
    }
    
})