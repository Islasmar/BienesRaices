import  express  from "express";
import protectRoute from "../middlewares/protectRoutes.js";
import{
    deleteProperty,
    findAllByUserProperty,
    findAllProperty,
    finOneProperty,
    insertProperty,
    updateProperty,
    formProperty,
    saveProperty,
    formAddImage,
    loadImage
}from "../controllers/propertyController.js";

 const router =express.Router();
 router.get("/create/",protectRoute,formProperty);
 router.post("/create",protectRoute,saveProperty);
 router.get('/create/addImage/:id',protectRoute,formAddImage)
 router.post('/create/addImage/:id',protectRoute,loadImage)
 export default router;