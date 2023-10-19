import express from 'express' 
 //EMCS6
const router = express.Router();

//Rutas a través de GET 
//router.get('/',(requets, response)=> response.send("Hola Web desde GET"))
router.get('/',(request,response)=> response.render("layout/index.pug", {pagina:"Inicio"}))//render mandar pintar o arrojar

router.get('/quienEres',(request, response)=>response.send("Soy tu primera App Web en arquitectura SOA (Service Object Orineted)"))
router.get('/queUsas',(request, response)=>response.send("Estoy desarrollado con un lenguaje de programación de JavaScript bajo el framework de NodeJS, y utilizo Express y Nodemon "))
router.get('/misDatos',(rq,re)=>response.send({nombre: 'Su  nombre completo aqui',fechaNacimiento: "1980-11-58",matricula: 'xxxxx'}));
//Caso de practica
router.get('/miColorfavorito',(request, response)=>response.send("Tu color favorito es naranja"));


//Rutas a través de POST
router.post('/',(request,response)=> response.send("Hi Web from POST verb."))

//Rutas a tráves de PUT
router.put('/',(request,response)=>response.send("You're trying to update some properties of data using PUT"))

//Rutas a tráves de PATCH
router.patch('/',(request,response)=>response.send("Hi, you trying to update all data object through PATCH"))

//Rutas a través de DELETE
router.delete('/',(request,response)=>response.send("Are you sure that you want to DELETE Data?"))

export default router;
//Mostrar que usas definir empoint llamado mi color favorito y en el Web devolver de menseje mi color favorito es naranja.