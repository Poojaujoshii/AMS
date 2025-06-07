import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"
import dbConnect from "./Config/dbConfig.js"; 
import assetRouter from "./Routes/AssetRoute.js";
import employeeRouter from "./Routes/EmployeeRoute.js";
import adminAuthRouter from "./Routes/Auth/AdminAuthRoute.js"
import adminRouter from "./Routes/adminRoute.js";
import employeeAuthRouter from "./Routes/Auth/EmployeeAuthRoute.js";
config()



//Server declaration
const app = express();

//Middlewares
app.use(express.json())//json parser
app.use(express.urlencoded({extended: true})) //url data parser
app.use(cors())//cors policyresolve
app.use(morgan("dev")) //http logger
app.use(cookieParser())//cookie data parser

app.use("/api/admin",adminRouter)
app.use("/api/employee",employeeRouter)
app.use("/api/asset",assetRouter)
app.use("/api/auth/employee",employeeAuthRouter)
app.use("/api/auth/admin",adminAuthRouter)


app.get("/",(req,res)=> res.send({message:"server is running"}))

//db connection
dbConnect()

//Server listening
const port = process.env.SERVER_PORT || 8000;

app.listen(8000,()=>{
    console.log("Server is running in port" + port);
    
})