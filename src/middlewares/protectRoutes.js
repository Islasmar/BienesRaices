import dotenv from 'dotenv';
dotenv.config({path:"src/.env"})
import jwt from 'jsonwebtoken';
import User from '../models/User.js'

const protectRoute = async(request,response, next)=>{
    console.log('Hola desde middleware')
    //Verificar si hay un token.
    console.log(request.cookies)
    const {_token}=request.cookies
    if(!_token){
        console.log("Redireccionando al inicio por qu eno existe un token.")
        return response.redirect('/login')
        
    }
   
    //TODO: verificar el token.
    try{
        const decodedJWT = jwt.verify(_token, process.env.JWT_HASH_STRING)
        //console.log(decodedJWT)
        const loggedUser = await User.findByPk(decodedJWT.userId)
        console.log(loggedUser)
        if(!loggedUser){
            return response.clearCookie('_token').redirect("/login")
        }else{
            console.log('Escribiendo los datos del usuario en el objeto DOM.')
            request.User = loggedUser
        }
    }catch(error){
        return response.clearCookie('_token').redirect("/login")
    }
    next()

}
export default protectRoute;