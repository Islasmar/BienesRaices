import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({path:"src/.env"});
//Le das el nombre de la BD, el nombre del usuario y la contraseña que tienen ese usuario
//porcess.env es para que jale los datos.
//console.log(`bd: ${process.env.BD_NAME}, user: ${process.env.BD_USER}, contraseña: ${process.env.BD_PASSWORD}`)
const db= new Sequelize(process.env.BD_NAME, process.env.BD_USER, process.env.BD_PASSWORD,{
    host:process.env.BD_HOST,
    port:"3309",
    dialect:"mysql",
    define:{timestamp:true},//Cuando el usuario fue creado ese usuarioo registro o en la mebnra en que se se actualizo.
    timezone: "America/Mexico_City",
    define: {
        timestamps: true,       // Habilita las marcas de tiempo (timestamps) en los modelos de datos.
      },      //Agregar datos en la hora correspondiente.
    pool:{
        max:5,
        min:0,
        //En 3 segundos va a matar la sesión.
        acquire:30000,
        //En 1 segundo va a dormir la contraseña.
        idle:1000,
        operatorAliases: false, // Deshabilita los alias de operadores en Sequelize.
    }
})
export default db;
 //Todas las clases y objetos van en Singular y primera letra en Mayusculas.
 