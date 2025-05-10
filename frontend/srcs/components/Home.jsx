import React from 'react'
import axios from 'axios';


import Card from './Card'

function Home() {
    const checkoutHandler=async(amount)=>{
      const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")
      const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
        amount
      })

      const options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Aman Gupta",
        description: "Test Transaction",
        image: "https://lh3.googleusercontent.com/a/ACg8ocJrjZmO0CbmgNPtrplK6P_HPxpFjygJXWI59NWJ5C1GnaucWOk=s360-c-no",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000"
        },
        notes: {
          "address": "Razorpay Corporate Office"
        },
        theme: {
          "color": "#51b3f0"
        }
      };
      const razorpay = new window.Razorpay(options)
      razorpay.open();
    }
  return (
    <div>hello
        <div>
            <Card amount={5000} img={"https://images.herzindagi.info/image/2023/Jun/apple-laptops-price.jpg"} checkoutHandler={checkoutHandler}/>
        </div>
        <div>
            <Card amount={5000} img={"https://www.imagineonline.store/cdn/shop/files/iPhone_16_Pink_PDP_Image_Position_1__en-IN_4dccfc5a-39a9-4652-9c28-825d511fb1ee.jpg?v=1727247691"} checkoutHandler={checkoutHandler}/>
        </div>
        
    </div>
  )
}

export default Home