import express from "express";
import { adminVerify } from "../Middlewares/AdminVerifyMiddleware.js";
import { addEmployee } from "../Controllers/EmployeeController.js";
const employeeRouter = express.Router();

employeeRouter.post("/add", adminVerify,addEmployee);
export default employeeRouter;