import { app  } from "./app.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";

connectDB();

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
   
  });
  
//   instance.orders.all  ().then(console.log).catch(console.error);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on Port ${process.env.PORT}`)
})