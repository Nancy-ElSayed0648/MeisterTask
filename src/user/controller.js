import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql"
import { userType } from "./type.js"
import { User } from "../../database/models/user.js"


export const getAllUsers = {
    type:new GraphQLList(userType),
    resolve:async()=>{
        return await User.find()
    }
}

export const user ={
    type:userType,
    args:{id:{type:GraphQLID}},
    resolve:async(parent,args)=>{
        let user = await User.findOne({_id:args.id})
        return user
    }
}


export const createUser ={
    type:GraphQLString,
    args:{
        name:{type:new GraphQLNonNull(GraphQLString)},
        email:{type:new GraphQLNonNull(GraphQLString)},
        password:{type:new GraphQLNonNull(GraphQLString)},
        role:{type:new GraphQLNonNull(GraphQLString)},
        phone:{type:new GraphQLNonNull(GraphQLInt)}
    },
    resolve:async(parent,args)=>{
        const user = await User.findOne({email:args.email})
        if(user) return "email already exist"
        const newUser = await User.insertMany(args)
        return "user added successfuly"

    }
}


export const updateUser ={
    type:GraphQLString,
    args:{
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        password:{type:GraphQLString},
        role:{type:GraphQLString},
        phone:{type:GraphQLInt}
        
    },
    resolve:async(parent,args)=>{
        const user = await User.findByIdAndUpdate(args.id,args)
        if(!user)return "user not found"
        return "user updated successfuly"
    }
}


export const deleteUser = {
    type:GraphQLString,
    args:{id:{type:GraphQLID}},
    resolve:async(parent,args)=>{
        const user = await User.findByIdAndDelete(args.id)
        if(!user) return "user not found"
        return "user deleted successfuly"
    }
}