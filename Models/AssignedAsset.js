import mongoose, { Schema, model  } from "mongoose";

const assignedAssetSchema = new mongoose.Schema({
    assetId: {type : mongoose.Schema.Types.ObjectId, required : true},
    employeeId: {type : Schema.Types.ObjectId, required : true},
    assignedAt: {type : Date, default:Date.now()},
    returnedAt: {type : Date,default: null},
    returnedConditon: {type : String,default: null},
    note: {type : String,default: null },
},{timestamps:true})

const AssignedAsset = model("AssignedAsset",assignedAssetSchema)
export default AssignedAsset;