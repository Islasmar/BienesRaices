import {check, validationResult} from 'express-validator';//Check: va a revisar por un campo en específico y validationResult va a guardar el resultado de la validación.
import { request,response } from "express";
import User from "../models/User.js";
const formLogin = (request,response)=>{
    response.render("auth/login.pug",{
        pagina:"Login",
        isLogged:true
    });
}
const formRegister = (request, response) => {
    response.render("auth/register.pug", {
        pagina: "Create your account",
        isLogged: true
    });
}
const formRecovery = (request, response) => {
    response.render("auth/recovery.pug", {
        pagina: "Forgot your password?",
        isLogged: true
    });
}
//async nos sirve por que puede que la base no este en nuestro
const insertUser = async(request,response)=> {
    console.log("El Usuario está intentando registrar sus datos en la BD");
    console.log(`Nombre: ${request.body.name}`);/*Leer la información que se ingresa en el formulario y habilitando la lectura de los formularios. */

    /*Validación */
    await check('name').notEmpty().withMessage('This field is required').run(request);/*await trabaja de manera secuencial.*/

    await check('email').isEmail().withMessage('This field should be an Email').withMessage("The value most be in format user@damai.exit").run(request);

    await check('password').notEmpty().withMessage('This field is required').isLength({min:8}).withMessage('Password must contain at least of 8 characteres').isLength({max:20}).withMessage('Password must contain lees than 20 characteres').equals(request.body.repeatpassword).withMessage('Both password must be the same').run(request);

    let result = validationResult(request)
    /*res.json(result.array())
    console.log(`El resultado de la validación ha encontrado ${result.array.length} errores`);//Dice cual es el resultado de la validación*/

    //Verificar que el resultado este vacio.
    if(result.isEmpty())
    {
        const newUser = await User.create(request.body); /*Crear un nuevo usuario con la información que se le esta pasando.*/
        response.send("User Created");/*Retornar ese nuevo usuario con los caracteres ingresados. */
    }else{
        return response.render("auth/register.pug",{
            pagina: `Creating New Account`,
            errors: result.array(),
            user:{
                name: request.body.name,
                email: request.body.email
            }
        });
    }
}


export {
    formLogin,
    formRegister,
    formRecovery,
    insertUser
};