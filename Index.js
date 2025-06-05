import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"
import dbConnect from "./Config/dbConfig.js"; 
config()



//Server declaration
const app = express();

//Middlewares
app.use(express.json())//json parser
app.use(express.urlencoded({extended: true})) //url data parser
app.use(cors())//cors policyresolve
app.use(morgan("dev")) //http logger
app.use(cookieParser())//cookie data parser


app.get("/",(req,res)=> res.send({message:"server is running"}))

//db connection
dbConnect()

//Server listening
const port = process.env.Server_port || 3000

app.listen(8000,()=>{
    console.log("Server is running in port" + port);
    
})