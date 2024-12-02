import mongoose from "mongoose"


export const dbConnection = async()=>{

    await  mongoose.connect("mongodb://127.0.0.1:27017/MeisterTask").then(()=>{
        console.log("DataBase Connected")
    }).catch((err)=>{
        console.log("DataBase error" , err)
    })

}