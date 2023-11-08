import dotenv from 'dotenv';
import jwt from "jsonwebtoken";

dotenv.config({path: "src/.env"})

const generateID = () => Date.now().toString(32) + Math.random().toString(32).substring(3)


const jwtToken  = (userId)=> jwt.sign({ //Datos para JWT
    domain: process.env.JWT_DOMAIN,
    autor: process.env.JWT_AUTHOR,
    signature: process.env.JWT_SIGNATURE,
    year: process.env.JWT_YEAR,
    userId
  },process.env.JWT_HASH_STRING,{
    expiresIn: '1h'
  });

  export { 
    jwtToken,
    generateID
  }
