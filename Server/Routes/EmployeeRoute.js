import express from "express"
import { adminVerify } from "../Middlewares/AdminVerifyMiddleware.js"
import { addEmployee, getAllEmployees, getEmployee } from "../Controllers/EmployeeController.js"

const employeeRouter = express.Router()

//get Logedin Employee Data
employeeRouter.get("/", getEmployee)

//add employee
employeeRouter.post("/add", adminVerify, addEmployee)

//get all employees
employeeRouter.get("/all", adminVerify, getAllEmployees)

//employee update

export default employeeRouter