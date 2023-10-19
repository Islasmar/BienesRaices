//Elemento que permite definir los tipos de datos de las propiedades (columnas de la base de datos).
import { DataTypes } from "sequelize";
import db from '../config/db.js'

const User = db.define("tbb_users",
{
    name: 
    {
        type: DataTypes.STRING(255),
        //Indica que es obligatorio.
        allowNull:false
    },
    email:
    {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    password: 
    {
        type: DataTypes.STRING,
        allowNull:false
    },
    token: DataTypes.STRING,
    verifide: 
    { 
        type: DataTypes.BOOLEAN,
        default: false
    }
}
);

export default User;




//Al no definirlo sería opcional.
//token: DataTypes.STRING,


/* Indica que todos los Usuarios comenzarán por default en 
token: DataTypes.STRING,
verifide: 
{ 
    type: DataTypes.BOOLEAN,
    default: false
}*/