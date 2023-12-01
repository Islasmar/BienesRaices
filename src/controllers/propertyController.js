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

    const { title, description, nRooms, nParkinlots, nWC, priceRange, category, street, lat, lng } = req.body

    try {

        const loggedUser = request.User.id
        if (loggedUser) {
            const savedProteperty = await Property.create({
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

            response.json({
                msg: 'La propiedad a sido guardada'
            })
        }
    } catch (error) {
        return response.clearCookie('_token').redirect("/login")
    }
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