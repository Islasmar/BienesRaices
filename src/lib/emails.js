import dotenv from "dotenv";
import nodemailer from "nodemailer";
const emailRegister = async (userData) =>{
    var transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
const {name,email,token} = userData;

await transport.sendMail({
    from : "220192@utxicotepec.edu.mx",
    to: email,
    subject: "Welcome to RealState - 220192 - Confirm your account",
    text: `Thank you for chosing us, in our platform, you could sell and buy properties, to continue please follow confirmation link below:`,
    html:`<div style="border:2px solid black; padding:20px; background-color: #e8f3ee">
    <div style="display:flex; justify-content:space-between; padding-bottom:20px;">
    <img src="/src/public/img/facebook.png" alt="Icono 1" style="width:30px; height:30px"/>
    <img src="/src/public/img/instagram.png" alt="Icono 2" style="width:30px; height:30px"/>
    <img src="/src/public/img/gorjeo.png" alt="Icono 3" style="width:30px; height:30px"/>
    </div>
    <p>
        <center>
            <h1 style="color: #238189;">Hello, ${name}</h1>
            <center><br><h3>You are verifying your account on RealState.com <br> Your account is almost active please
                follow the activation link below:</h3>
                 <a href="http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/login/confirm/${token}">Click
                    Here to Active Your Account.</a>
    </p>
    <p><h3>If you didnt create this account just ignore this email </h3></p>
</div>
`
})


console.log(`######## \n Se está intentando enviar un correo electrónico al usuario: ${email}, con el token de validación: ${token}  \n  ############`);
};


  export {
    emailRegister
  };

