import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const db = process.env.MONGO_URL||"mongodb://127.0.01:27017/AssetManagementSystem";

const dbConnect = async ()=>{
    try{
        await mongoose.connect(db);
        console.log("Mongo Database Connected");
    }
    catch(error){
        console.log("Db connection error :", error.message);
        
    }
}
export default dbConnect;