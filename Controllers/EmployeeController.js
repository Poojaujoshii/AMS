import Employee from "../Models/Employee.js";

export const addEmployee = async (req,res,next)=>{
    try{
        const employeeDetails = new Employee(req.body);
        await employeeDetails.save()
        res.status(201).send({message:"Employee Added"})
    }
    catch(error){
        next(error);
    }
}