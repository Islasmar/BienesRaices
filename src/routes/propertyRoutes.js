import  express  from "express";
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
 router.post("/create",saveProperty);
 export default router;