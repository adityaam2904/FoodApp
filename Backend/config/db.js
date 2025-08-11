import mongoose from "mongoose";

 export const connectDb = async ()=>{
  await mongoose.connect("mongodb+srv://adityaam2904:Adu111@cluster0.8sdolh1.mongodb.net/food-del").then(()=>console.log("DB Connected"));
} 