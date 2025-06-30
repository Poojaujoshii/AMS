// index.js  ───────────────────────────────────────────────
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import dbConnect   from "./Config/dbConfig.js";
import assetRouter from "./Routes/AssetRoute.js";
import adminRouter from "./Routes/AdminRoute.js";
import employeeRouter from "./Routes/EmployeeRoute.js";
import authRouter  from "./Routes/AuthRoute.js";   // ✅  single auth router
import errorHandler from "./Middlewares/ErrorMiddleware.js";

config();                                        // load .env (safe even if you don't have one)
const PORT = process.env.SERVER_PORT || 8000;


const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",   // frontend
    credentials: true,                 // cookies
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


app.use("/api/auth",     authRouter);     
app.use("/api/admin",    adminRouter);    
app.use("/api/employee", employeeRouter); 
app.use("/api/asset",    assetRouter);    

app.get("/", (req, res) => res.json({ message: "server is running" }));


app.use(errorHandler);                    

await dbConnect();                        
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
