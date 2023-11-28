import { exit } from 'node:process'
import categories from "./categories.js";
import db from '../../config/db.js';
import { truncate } from 'node:fs';
import Price from '../../models/Price.js';
import prices from './prices.js';
import category  from '../../models/category.js';
import User from '../../models/User.js';
import users from './users.js';
const importData = async () => {
    try {
        //Autenticar
        await db.authenticate()

        //Generar las columnas
        await db.sync()

        // insertar los datos 
        await Promise.all([
            category.bulkCreate(categories),
            Price.bulkCreate(prices),
            User.bulkCreate(users)
        ]);
        console.log('Datos Importados Correctamente')
        exit()//1 con error 


    } catch (error) {
        console.log(error)
        exit(1)
    }
}
const deleteData = async () => {
    try {
        await Promise.all([
            category.destroy({
                where: {}, truncate: false
            }),
            db.query("ALTER TABLE tbc_categories AUTO_INCREMENT=1"),

            Price.destroy({
                where: {}, truncate: false
            }),
            db.query("ALTER TABLE tbc_categories AUTO_INCREMENT=1"),
            
            User.destroy({
                where: {}, truncate: false
            }),
            db.query("ALTER TABLE tbb_users AUTO_INCREMENT=1"),
        ])
    }
    catch (error) {
        console.log(error)
        exit(1)
    }
}

if (process.argv[2] === "-i") {
    importData();
}
if (process.argv[2] === "-d") {
    deleteData();
}

