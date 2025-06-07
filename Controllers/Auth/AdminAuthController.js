import Admin from "../../Models/Admin.js"
import jwt from "jsonwebtoken"
export const adminLogin = async(req,res)=>{
    try{
       const {email,password} =req.body 
       if(email && password){
            const isAdmin = await Admin.findOne({email})
            if(isAdmin){
                if(password === isAdmin.password){
                    const token  = jwt.sign({id:isAdmin._id},"SecretKey")
                     return res.status(200).send({token})
                }
                else{
                    return res.status(401).send({error:"Incorrect Password"})
                }
            }
            else{
                return res.status(400).send({error:"Admin Not found"})
            }
       }
       else{
        return res.status(400).send({error:"Provide All Fields"})
       }
    }
    catch(error){
         return res.status(500).send({error:"Something went wrong", msg:error.message})
    }
}