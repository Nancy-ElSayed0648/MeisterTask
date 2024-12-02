import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { User } from "../../database/models/user.js";
import { createUser, deleteUser, getAllUsers, updateUser, user } from "./controller.js";
import { userType } from "./type.js";


const rootQuery = new GraphQLObjectType({
    name:'rootQuery',
    fields:{
        getAllUsers,
        user
    }
})


const rootMutation = new GraphQLObjectType({
    name:'rootMutation',
    fields:{
        createUser,
        updateUser,
        deleteUser
    }
})

export const userSchema = new GraphQLSchema({
    query: rootQuery,
    mutation: rootMutation
})