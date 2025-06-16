import Employee from "../Models/Employee.js";
import { verifyToken } from "../Utilities/Jwt.js";
import { sendEmail } from "../Utilities/Mailer.js";

export const addEmployee = async (req,res,next)=>{
    try{
        const employeeDetails = new Employee(req.body);
        await employeeDetails.save()
        await sendEmail({to:employeeDetails.email,
            subject: "your employee Credentials created successfully",
            text:`Hi.${employeeDetails.name},Welcome to Our Company to work like slave.
             You Can login toour company website using these detials
            empId = ${employeeDetails.employeeId},
            password = ${employeeDetails.password} `
        })
        res.status(201).send({message:"Employee Added"})
    }
    catch(error){
        next(error);
    }
}
export const getAllEmployees = async(req,res,next)=>{
    try{
         const employees = await Employee.find({},{password:0,__v:0, _id:0,createdAt:0,updatedAt:0});
        res.status(200).send(employees);
    }
    catch(error){
        next(error)
    }
}
export const getEmployee = async(req,res,next)=>{
    try{
        const {token} = req.cookies
        if(token){
            const {id} = verifyToken(token)
            if(id){
                const isEmployee = await Employee.findById(id,{password:0,__v:0,_id:0})
                if(isEmployee){
                    res.status(200).send(isEmployee)
                }
                else{
                     throw new Error("Invalid User Details")
                }

            }else{
               throw new Error("Unknown Token")  
            }
        }
        else{
            throw new Error("Token Not Found")
        }
        
    }
    catch(error){
        next(error)
    }
}