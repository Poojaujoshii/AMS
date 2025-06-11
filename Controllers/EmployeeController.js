import Employee from "../Models/Employee.js";
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