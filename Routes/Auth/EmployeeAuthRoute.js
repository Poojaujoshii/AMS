import express from "express";
import { EmployeeLogin } from "../../Controllers/Auth/EmployeeAuthController.js";
const employeeAuthRouter = express.Router();
employeeAuthRouter.post("/login",EmployeeLogin)
export default employeeAuthRouter;