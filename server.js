import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/userAPI.js'
import { productApp } from './APIs/userAPI.js'
import cookieParser from 'cookie-parser';
import {config} from 'dotenv';
const app=exp()
//add body parser
app.use(exp.json())
app.use(cookieParser())
//forward req to userapp if path start with /user-api
app.use("/user-api",userApp)
app.use("/product-api",productApp)

//connect to db server
async function connectDB() {
try{
await connect("mongodb://localhost:27017/anuragdb2")
console.log("DB CONNECTED success");
//start server
app.listen(4000,()=>console.log("server on port 4000"))
} catch(err) {
console.log("err in DB connection:",err)
}
}
connectDB();
//error handling middleware
app.use((err,req,res,next)=>{
 if(err.name==="ValidationError"){
   return res.status(400).json({message:"error occured",error:err});
 }

 if(err.name==="CastError"){
   return res.status(400).json({message:"error occured",error:err});
 }
})

