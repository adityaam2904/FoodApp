import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import foodRouter from "./Routes/FoodRoute.js"
import userRouter from "./Routes/userRoute.js"
import "dotenv/config"
import CartRouter from "./Routes/CartRoute.js"
import orderModel from "./Models/orderModel.js"
import orderRouter from "./Routes/OrderRoute.js"

//app config
const app  =  express()
const port =  4000

//middleware
app.use(express.json())
app.use(cors())  

// db connection
connectDb();

//Api endpoints
app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",CartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("Hello s!")
})
app.listen(port,()=>{
  console.log(`Server Running on http://localhost:${port}`)
})

