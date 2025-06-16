import express from "express";
import { adminVerify } from "../Middlewares/AdminVerifyMiddleware.js";
import { addEmployee, getAllEmployees, getEmployee } from "../Controllers/EmployeeController.js";
const employeeRouter = express.Router();

employeeRouter.post("/add", adminVerify,addEmployee);
employeeRouter.get("/all",adminVerify,getAllEmployees);
employeeRouter.get("/employeeDetail",getEmployee)
export default employeeRouter;