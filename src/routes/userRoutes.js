import express from 'express'
import { formLogin, formRegister,formRecovery, insertUser,confirmAccount,resetPassword, authenticateUser, changePassword, updatePassword, homePage }from'../controllers/userController.js';
const router = express.Router();
router.get("/",formLogin);
router.get("/register",formRegister);
router.get("/recovery",formRecovery);
router.post("/register",insertUser);

//Confirm account 
router.get("/confirm/:token",confirmAccount);
//Reset account
router.post("/recovery",resetPassword);
//Change Password
router.get("/password-change/:tokenPassword",changePassword);
router.post("/update-password/:tokenPassword",updatePassword);
router.post("/",authenticateUser);

router.get('/', homePage);

   
export default router