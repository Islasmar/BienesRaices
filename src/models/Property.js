import { DataTypes } from "sequelize";
import db from "../config/db";

const Property = db.define("tbb_properties",{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING(150),
        allowNull:false,
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
        
    }
})