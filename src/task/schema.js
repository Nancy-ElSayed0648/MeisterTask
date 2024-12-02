import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

import  { createTask, deleteTask, getAllTasks, task, updateTask } from "./controller"


const rootQuery = new GraphQLObjectType({
    name:'rootQuery',
    fields:{
        getAllTasks,
        task
    }
})


const rootMutation = new GraphQLObjectType({
    name:'rootMutation',
    fields:{
        createTask,
        updateTask,
        deleteTask
    }
})

export const taskSchema = new GraphQLSchema({
    query: rootQuery,
    mutation: rootMutation
})