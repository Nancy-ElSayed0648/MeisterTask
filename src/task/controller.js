import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql"

import { taskType } from "./type.js"
import { Task } from "../../database/models/task.js"
import { User } from "../../database/models/user.js"


 const getAllTasks = {
    type:new GraphQLList(taskType),
    resolve:async()=>{
        return await Task.find()
    }
}

 const task ={
    type:taskType,
    args:{id:{type:GraphQLID}},
    resolve:async(parent,args)=>{
        let user = await Task.findOne({_id:args.id})
        return task
    }
}


 const createTask ={
    type:GraphQLString,
    args:{
        id:{type:GraphQLID},
        title: {type:GraphQLString},
        description: {type:GraphQLString},
        User:{type:GraphQLID}
    },
    resolve:async(parent,args)=>{
        const user = await User.findById(args.id)
        if(!user) return "user not Found"
        const task = await Task.insertMany(args)
        return "task added successfuly"

    }
}


 const updateTask ={
    type:GraphQLString,
    args:{
        id:{type:GraphQLID},
        title: {type:GraphQLString},
        description: {type:GraphQLString},
        User:{type:GraphQLID}
        
    },
    resolve:async(parent,args)=>{
        const task = await Task.findByIdAndUpdate(args.id,args)
        if(!task)return "task not found"
        return "task updated successfuly"
    }
}


 const deleteTask = {
    type:GraphQLString,
    args:{id:{type:GraphQLID}},
    resolve:async(parent,args)=>{
        const task = await Task.findByIdAndDelete(args.id)
        if(!task) return "task not found"
        return "task deleted successfuly"
    }
}

export{
    getAllTasks,
    task,
    createTask,
    updateTask,
    deleteTask
}