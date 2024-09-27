// require('dotenv').config({path: './env'})        if we use require dotenv, then we don't need dotenv.config
import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";



dotenv.config({                     //Here we are configuring .env file
    path: './env'                   //We need it at the top cuz we want it to run at first and all the files of the app
})                                  //that requires .env file gets it as soon as possible



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at PORT : ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ", err);   
})













/*
import express from "express"
const app = express();

// function connectDB(){}
// connectDB()

;( async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("ERROR : ", error);
        throw error
        
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
        
       })
    }catch(error){
        console.log("ERROR: ", error);
        throw err
        
    }
})()
    */