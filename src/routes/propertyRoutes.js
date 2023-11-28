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
    saveProperty
}from "../controllers/propertyController.js";

 const router =express.Router();
 router.get("/create/",formProperty);
 router.post("/create",protectRoute,saveProperty);
 export default router;