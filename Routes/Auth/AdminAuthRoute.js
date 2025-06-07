import express from "express";
import { adminLogin } from "../../Controllers/Auth/AdminAuthController.js";
const adminAuthRouter = express.Router();
adminAuthRouter.post("/login",adminLogin)
export default adminAuthRouter;