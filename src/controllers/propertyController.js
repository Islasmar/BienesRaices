import { request, response } from "express";

const formProperty = (request,response)=>{
    console.log("Mostrando el formulario para la creación de una nueva Propiedad");
    console.log(request.body);
    response.render('property/create.pug',{
        page: "New Property",
        showHeader: true,
        data:request.body
    })
}
const insertProperty = (request, response)=>{
    return 0
}
const updateProperty = (request, response)=>{
    return 0
}
const deleteProperty = (request, response)=>{
    return 0
}
const findAllProperty = (request, response)=>{
    return 0
}
const findAllByUserProperty = (request, response)=>{
    return 0
}
const finOneProperty = (request, response)=>{
    return 0
}
const saveProperty = async(request,response)=>{
    console.log('Validar y guardar datos en la Bd de datos');
    response.json({msg: 'La propiedad a sido guardada'})
}


export {
    insertProperty,
    updateProperty,
    deleteProperty,
    findAllProperty,
    findAllByUserProperty,
    finOneProperty,
    formProperty,
    saveProperty
}