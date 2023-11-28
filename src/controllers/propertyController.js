import { request, response } from "express";
import Category from '../models/category.js';
import Price from '../models/Price.js';


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
const formProperty = async (request,response)=>{
    console.log("Mostrando el formulario para la creación de una nueva Propiedad");
    console.log(request.body);

    const [categories,prices]= await Promise.all([Category.findAll(),Price.findAll()])
    response.render("property/create",{ 
        page: "New Property",
        showHeader: true,
        data: request.body,
        categories,
        prices
    })
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