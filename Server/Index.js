import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"
import dbConnect from "./Config/dbConfig.js"; 
import assetRouter from "./Routes/AssetRoute.js";
import employeeRouter from "./Routes/EmployeeRoute.js";
import adminRouter from "./Routes/adminRoute.js";
import errorHandler from "./Middlewares/ErrorMiddleware.js";
import authRouter from "./Routes/AuthRoute.js";
config()



//Server declaration
const app = express();

//Middlewares
app.use(express.json())//json parser
app.use(express.urlencoded({extended: true})) //url data parser
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
//cors policyresolve
app.use(morgan("dev")) //http logger
app.use(cookieParser())//cookie data parser

app.use("/api/admin",adminRouter)
app.use("/api/employee",employeeRouter)
app.use("/api/asset",assetRouter)
app.use("/api/auth", authRouter)



app.get("/",(req,res)=> res.send({message:"server is running"}))

//error bounding
app.use(errorHandler)

//db connection
dbConnect()

//Server listening
const port = process.env.SERVER_PORT || 8000;

app.listen(8000,()=>{
    console.log("Server is running in port " + port);
    
})