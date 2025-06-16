import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
    name: {type : String, required : true},
    category: {type : String, required : true},
    s_no: {type : Number, unique : true, required : true},
    model: {type : String},
    imageUrl: {type : String},
    assetTag: {type : String, unique : true, required : true},
    status: {type : String, enum: ["Available","Assigned","Damaged"]},
    purchaseDate: {type : Date},
    warrantyExpiryDate: {type : Date},
},{timestamps:true})

const Asset = mongoose.model("Assets",assetSchema)
export default Asset;