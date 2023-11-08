import { DataTypes } from "sequelize";
import db from '../config/db.js'

const seller =db.define("tbb_seller",
{
    name:
    {
        type: DataTypes.STRING(255),
        allowNull:false
    },
    totalproperties:
    {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    totalsales: {
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false
      },
    picture: {
      type: DataTypes.STRING,
      allowNull: true 
    }
  });

  export default seller;