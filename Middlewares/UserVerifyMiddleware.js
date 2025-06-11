// /Middleware/userVerify.js
import { verifyToken } from "../Utilities/Jwt.js";
import Admin from "../Models/Admin.js";
import Employee from "../Models/Employee.js";   

export const userVerify = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error("Not authenticated");

   
    const { id } = verifyToken(token);

    // Try Admin first, then Employee
    const admin = await Admin.findById(id);
    if (admin) {
      req.user = { id: admin._id, role: "admin" };
      return next();
    }

    const employee = await Employee.findById(id);
    if (employee) {
      req.user = { id: employee._id, role: "employee" };
      return next();
    }
    throw new Error("Invalid credentials");
  } catch (error) {
    next(error);
  }
};
