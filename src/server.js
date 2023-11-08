// const express = require('express') // Common JS

/*Importando la libreria de express para activar la comunicación protocolo HTTP 
   ECMS6 */

import express from 'express';
import generalRoutes from './routes/generalRoutes.js';
import userRoutes from './routes/userRoutes.js';
import db from './config/db.js';
import User from './models/User.js';
import Seller from './models/Seller.js';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config({path:"src/.env"})
// Crear la app
const app  = express()

//Abilitar el uso de  cookies


const port = 3000;
try {
    //Con este comando me logeo a la base de datos
    await db.authenticate();
    await db.sync();/*Crear las tablas o crear la conexión con las bases de datos */
    console.log("Conexión ala base de datos exítosa");
} catch (error) {
    console.log("error");
    
}

app.set('view engine','pug')//Le dice al Servidor que lo que se va a agtregar y a utilizar en este caso es PUG.
app.set('views','./src/views')//Estamos definiendo en donde estarán las vistas.

app.use(helmet())

//Carpeta Pública.
app.use(express.static('public'))
//Permitimos la lectura de datos a traves de los elementos HTML.
app.use(express.urlencoded({extended:true}))

// // Routing
/* app.get('/', function(req, res) {
     res.send('Hola Mundo en express')
 })

app.get('/', function(req, res) {
    res.send('Hola aquí hay información de nosotros')
 })*/

// Definir el número de puerto en el que se va a escuchar


// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port,(request,response) => {
    // Imprimir un mensaje en la consola indicando el puerto en el que está funcionando el servidor
    //Le indicamos a la instancia de express que comience a escuchar las peticiones
    console.log(`El servicio HTTP A iniciado.... \nEl servidor está funcionando en el puerto ${port}`);
});
//Necesita dos parametros conocido como (Cold Back)
//la condición necesita dos parametros donde recibe la petición y de la misma manera responde a la petición del 

/*
app.get("/",(request,response)=> 
{
    console.log("Escuchando una petición GET desde el protocolo HTTP...");
    response.send("Hola Web");/*Escucha a la petición del servidor y muestra el mensaje 
})


app.get("/quienEres",(request,response)=> 
{
    console.log("Respondiendo a la pregunta ¿Quién Eres?");
    response.send("Soy una aplicación Web en arquitectura SOA y atenderé la información de los usuarios");/*Escucha a la petición del servidor y muestra el mensaje
})


app.get("/quienEres",(request,response)=> 
{
    console.log("Respondiendo a la pregunta ¿Quién Eres?");
    response.send("Hola desde POST");/*Escucha a la petición del servidor y muestra el mensaje 
})


app.get("/queUsas",(request,response)=> 
{
    console.log("Respondiendo a la pregunta ¿Qué usas?");
    response.send("Estoy desarrollado con un lenguaje de programación de JavaScript bajo el framework de NodeJS, y utilizo Express y Nodemon");/*Escucha a la petición del servidor y muestra el mensaje 
})

app.get("/misDatos",(request,response)=> 
{
    console.log("Escuchando una petición GET desde el protocolo HTTP...");
    response.send("{nombre: 'Su  nombre aqui',matricula: 'xxxxx', grado: 4, grupo:'B'}");/*Escucha a la petición del servidor y muestra el mensaje 
})*/

app.use('/login',userRoutes)
app.use(express.static('./src/public'))

app.use('/',generalRoutes)
