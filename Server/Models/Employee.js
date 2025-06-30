import mongoose, { Mongoose } from "mongoose";

const employeeSchema = new mongoose.Schema({
    employeeId :{type:String, unique:true,required:true},
    name: {type:String,  required : true},
    email: {type : String, unique:true, required : true},
    password: {type : String, required : true},
    phone: {type : Number, unique : true, required : true},
    department: {type : String, enum:["HR","IT","Management","Sales","Finance","Branding"]},
    role: {type : String},
    status: {type : String, enum: ["Active","Inactive","Resigned"]},
},{timestamps:true})

const Employee =  mongoose.models.Employees || mongoose.model("Employees", employeeSchema);
export default Employee;