import mongoose from "mongoose";

const schema =new mongoose.Schema({
    title: String,
    description: String,
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
},{
    timestamps: true,
    versionKey:false
})


export const Task = mongoose.model('Task' , schema)