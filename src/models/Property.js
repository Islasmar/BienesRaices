import { DataTypes } from "sequelize";
import db from "../config/db.js"

const Property = db.define("tbb_properties", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(150),
        allowNull: false,

    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    nRooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    nParkinlots: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    nWC: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    address:{
        type:DataTypes.STRING(300),
        allowNull:false
    },
    lat:{
        type:DataTypes.STRING,
        allowNull:true
    },
    lng:{
        type:DataTypes.STRING,
        allowNull:true
    },
    image:{
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: 'por definir'
    },
    published:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
    

});
export default Property;