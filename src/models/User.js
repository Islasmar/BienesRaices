//Elemento que permite definir los tipos de datos de las propiedades (columnas de la base de datos).
import { DataTypes } from "sequelize";
import db from '../config/db.js'
import bcrypt from 'bcrypt';

const User = db.define("tbb_users",
    {
        name:
        {
            type: DataTypes.STRING(255),
            //Indica que es obligatorio.
            allowNull: false
        },
        email:
        {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING,
            unique: true
        },
        veryfied:
        {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
    hooks: {
        beforeCreate: async (User) => {
            const salt = await bcrypt.genSalt(10);
            User.password = await bcrypt.hash(User.password, salt);
        }
    }
});
//Comparando las contraseñas (contraseña pasada como param y la contraseñade BD)
User.prototype.verifyPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

export default User;
/*export {
    User,
    seller
};*/

//Al no definirlo sería opcional.
//token: DataTypes.STRING,


/* Indica que todos los Usuarios comenzarán por default en 
token: DataTypes.STRING,
verifide: 
{ 
    type: DataTypes.BOOLEAN,
    default: false
}*/