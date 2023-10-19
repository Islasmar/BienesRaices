import express from 'express'
import { formLogin, formRegister,formRecovery, insertUser }from'../controllers/userController.js';
const router = express.Router();
router.get("/",formLogin)
router.get("/register",formRegister)
router.get("/recovery",formRecovery)
router.post("/register",insertUser)

   
export default router