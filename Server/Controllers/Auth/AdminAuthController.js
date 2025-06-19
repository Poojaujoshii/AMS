import Admin from "../../Models/Admin.js";
import Employee from "../../Models/Employee.js";
import { generateToken, verifyToken } from "../../Utilities/Jwt.js";

export const adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const isAdmin = await Admin.findOne({ email });
            if (isAdmin) {
                if (password === isAdmin.password) {
                    const token = generateToken({ id: isAdmin._id, role: "Admin" });
                    res.cookie("token", token, {
                        maxAge: 1000 * 60 * 60 * 24 * 7,
                        httpOnly: true
                    });
                    return res.status(200).send({ message: "Login Successful" });
                } else {
                    throw new Error("Incorrect Password");
                }
            } else {
                throw new Error("Admin Not Found");
            }
        } else {
            throw new Error("User Details Not Found");
        }
    } catch (error) {
        next(error);
    }
};

export const getAuthStatus = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        const { id, role } = verifyToken(token);

        if (role === "Admin") {
            // Corrected: findById must take the ID directly, not an object
           const adminDetails = await Admin.findById(id, { password: 0 });
            return res.status(200).json(adminDetails);

        } else if (role === "Employee") {
            // Same correction here
           const employeeDetails = await Employee.findById(id, { password: 0 });
            return res.status(200).json(employeeDetails);
        } 
    }catch (error) {
        next(error);
    }
}
export const Logout = async (req,res,next)=>{
    try{
        res.clearCookie("token")
        return res.status(200).send({message:"Logout Successful"})
    }catch(error){

    }
}
