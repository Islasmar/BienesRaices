import { request, response } from 'express';
import category from '../models/category.js';
import Category from '../models/category.js';
import Price from '../models/Price.js';
import Property from "../models/Property.js";



const insertProperty = (request, response) => {
    return 0
}
const updateProperty = (request, response) => {
    return 0
}
const deleteProperty = (request, response) => {
    return 0
}
const findAllProperty = (request, response) => {
    return 0
}
const findAllByUserProperty = (request, response) => {
    return 0
}
const finOneProperty = (request, response) => {
    return 0
}
const formProperty = async (request, response) => {
    console.log("Mostrando el formulario para la creación de una nueva Propiedad");
    console.log(request.body);

    const [categories, prices] = await Promise.all([Category.findAll(), Price.findAll()])
    response.render("property/create", {
        page: "New Property",
        showHeader: true,
        data: request.body,
        categories,
        prices
    })
}
const saveProperty = async (request, response) => {
    //TODO: Realizar las validaciones del campo antes de intentar guardar.
    //TODO: Implementar el auto rellenado en el formulario.
    console.log('Validar y guardar datos en la Bd de datos');

    const { title, description, nRooms, nParkinlots, nWC, priceRange, category, street, lat, lng } = request.body
    console.log(request.body)
    try {
        
        const loggedUser = request.User.id
        console.log(loggedUser)
        if (loggedUser) {
            const savedProperty = await Property.create({
                title,
                description,
                nRooms,
                nParkinlots,
                nWC,
                price_ID: priceRange,
                category_ID: category,
                address: street,
                lat,
                lng,
                user_ID: loggedUser,
            })
            response.redirect(`./create/addImage/${savedProperty.id}`)
        }
    } catch (error) {
        console.log(error)
        return response.clearCookie('_token').redirect("/login")
    }
}

const formAddImage = async (request, response) => {
    const { id } = request.params
    const searchedProperty = await Property.findByPk(id)//Selec * From tbb_propiedades where ID = id
    if (!searchedProperty) {
        console.log('La propiedad buscada no existe')
        response.redirect('login/home')
    } else {
        console.log('La propiedad si existe')
        //TODO: Validar que quien esta conectado sea el dueño de la propiedad.
        if (searchedProperty.published) {
            console.log('La propiedad ha sido publicad y las fotos y las fotos no pueden ser modificadas')
            response.render('login/home')
        } else {
            response.render('property/addImage', {
                page: 'Add Image to Proprety',
                propertyID:searchedProperty.id
            })

        }
    }
}           


        const loadImage = async (request, response) => {
            const { id } = request.params

            //TODO: Validar que la propiedad exista.
            const searchedProperty = await Property.findByPk(id)//Selec * From tbb_propiedades where ID = id

            if (!searchedProperty) {
                console.log('La propiedad buscada no existe')
                response.redirect('login/home')
            } else {
                console.log('La propiedad si existe')
                //TODO: Validar que quien esta conectado sea el dueño de la propiedad.
                if (searchedProperty.published){
                    console.log('La propiedad ha sido publicad y las fotos y las fotos no pueden ser modificadas')
                response.render('login/home')
                }
            }
            //TODO: validar que la propiedad este validada.
        }


        export {
            insertProperty,
            updateProperty,
            deleteProperty,
            findAllProperty,
            findAllByUserProperty,
            finOneProperty,
            formProperty,
            saveProperty,
            formAddImage,
            loadImage
        }