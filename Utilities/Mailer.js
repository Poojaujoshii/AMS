
import nodemailer from "nodemailer"
import { config } from "dotenv"
config()

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth :{
        user:process.env.MAIL_USER,
        password:process.env.MAIL_PASS
    }
})
export let sendEmail = async({to,subject,text})=>{
    try{
        await transporter.sendMail({
            from:process.env.MAIL_USER,
            to, subject,text
        })
    }
    catch(error){
        throw new Error(error)
    }

}


