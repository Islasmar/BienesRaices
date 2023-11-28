const protectRoute = async(request,response)=>{
    console.log('Hola desde middleware')
    //TODO: Verificar si hay un token.
    const {_token}=request.cookies
    if(!_token){
        return response.redirect('/login')
    }
    //TODO: verificar el token.
    try{

    }catch(error){
        return response.clearCookie('_token').redirect("/login")
    }
    next()
}
export default protectRoute;