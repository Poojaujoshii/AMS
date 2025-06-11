import Admin from "../Models/Admin.js";
import { verifyToken } from "../Utilities/Jwt.js";

export const adminVerify = async(req,res,next)=>{
    try{
        const {token} = req.cookies
        const { id } = verifyToken(token)
        //ckeck id is valid or not
        const isAdmin = Admin.findById(id);
        if(isAdmin){
            next()
        }else{
            throw new Error("Invaild Admin Credentials")
        }

    
    }
    catch(error){
        next(error);
    }
}