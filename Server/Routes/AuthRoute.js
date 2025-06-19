import express from "express"
import { adminLogin, getAuthStatus, Logout} from "../Controllers/Auth/AdminAuthController.js"
import { EmployeeLogin} from "../Controllers/Auth/EmployeeAuthController.js"

const authRouter  = express.Router();
authRouter.post("/admin/login",adminLogin)
authRouter.post("/employee/login",EmployeeLogin)
//auth status verification
authRouter.get("/me",getAuthStatus)
authRouter.get("/logout",Logout)

export default authRouter