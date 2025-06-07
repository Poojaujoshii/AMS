import mongoose, { Mongoose } from "mongoose";

const employeeSchema = new mongoose.Schema({
    employeeId: {type:String, unique:true, required : true},
    email: {type : String, unique:true, required : true},
    password: {type : String, unique:true, required : true},
    phone: {type : Number, unique : true, required : true},
    department: {type : String, enum:["HR","IT","Management","Sales","Finance","Branding"]},
    role: {type : String},
    status: {type : string, enum: ["Active","Inactive","Resigned"]},
},{timestamps:true})

const Employee = Mongoose.model("Employees",employeeSchema)
export default Employee;