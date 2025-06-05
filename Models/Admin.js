import mongoose, { Mongoose } from "mongoose";

const adminSchema = new mongoose.Schema({
    email: {type : String, unique : true, required : true},
    password: {type : String, unique : true, required : true}
})

const Admin = Mongoose.model("Admins",adminSchema)
export default Admin;