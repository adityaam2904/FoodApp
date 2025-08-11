import express from 'express';
import { addFood,listFood,removefood } from '../controllers/foodController.js';
import multer from "multer"

const foodRouter =express.Router();

//Image Storage Engine 

const storage=multer.diskStorage({
  destination:"uploads",
  filename:(req,file,callback)=>{
    return callback(null,`${Date.now()}${file.originalname}`)
    }
})

//middleware
const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removefood)



export default foodRouter