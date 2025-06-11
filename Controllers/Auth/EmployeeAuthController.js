import Employee from "../../Models/Employee.js"
import { generateToken } from "../../Utilities/Jwt"

export const EmployeeLogin = async(req,res,next)=>{
    try{
       const {email,password,employeeId} =req.body 
       if(email ||employeeId && password){
            const isEmployee = await Employee.findOne({email})
            if(isEmployee){
                if(password === isEmployee.password){
                    const token  = generateToken({id:isAdmin._id})
                    res.cookie("token",token,{maxAge:1000*60*60*24*7,httponly:true})
                     return res.status(200).send({message:"Login Successful"})
                }
                else{
                   throw new Error("Incorrect Password")
                }
            }
            else{
                throw new Error("Employee Not Found")
            }
       }
       else{
        throw new Error("User Details Not Found")
       }
    }
    
    catch(error){
        next(error)
    }
}