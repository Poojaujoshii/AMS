import mongoose, { Schema, model  } from "mongoose";

const assignedAssetSchema = new mongoose.Schema({
    assetId: {type : mongoose.Schema.Types.ObjectId, required : true},
    employeeId: {type : Schema.Types.ObjectId, required : true},
    assignedAt: {type : Date},
    returnedAt: {type : Date},
    returnedConditon: {type : String},
    Note: {type : String, },
},{timestamps:true})

const AssignedAsset = model("AssignedAsset",assignedAssetSchema)
export default AssignedAsset;