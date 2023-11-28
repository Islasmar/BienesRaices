import {  DataTypes } from "sequelize";
import db from "../config/db.js";

const category = db.define('tbc_category',{
    name:{
        type:DataTypes.STRING(30),
        allowNull:false,
    }
});
export default category;
