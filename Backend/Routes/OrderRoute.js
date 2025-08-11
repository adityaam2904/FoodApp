import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeorder,userOrders,verifyOrder } from "../controllers/OrderController.js"

const orderRouter = express.Router();

orderRouter.post("/placeOrder",authMiddleware,placeorder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrders)
export default orderRouter;
