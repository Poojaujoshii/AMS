import Admin from "../../Models/Admin.js"
import { generateToken } from "../../Utilities/Jwt.js"

export const adminLogin = async(req,res,next)=>{
    try{
       const {email,password} =req.body 
       if(email && password){
            const isAdmin = await Admin.findOne({email})
            if(isAdmin){
                if(password === isAdmin.password){
                    const token  = generateToken({id:isAdmin._id})
                    res.cookie("token",token,{maxAge:1000*60*60*24*7,httponly:true})
                     return res.status(200).send({message:"Login Successful"})
                }
                else{
                   throw new Error("Incorrect Password")
                }
            }
            else{
                throw new Error("Admin Not Found")
            }
       }
       else{
        throw new Error("User Details Not Found")
       }
    }
    catch(error){
         next(error)
    }
}