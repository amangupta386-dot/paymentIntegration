import { instance } from "../server.js"
import Razorpay from "razorpay"
import crypto from 'crypto';
import { Payment } from "../models/paymentModel.js";

export const checkout = async (req, res) => {
    var options = {
        amount: Number(req.body.amount) * 100,  // amount in the smallest currency unit
        currency: "INR",
        // receipt: "order_rcptid_11"
    };
    const order = await instance.orders.create(options);

    console.log(order);

    res.status(200).json({
        success: true,
        order: order
    })
}


export const paymentVerification = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        // Your Razorpay key secret
        const secret = process.env.RAZORPAY_API_SECRET;

        // Step 1: Generate the expected signature
        const generated_signature = crypto
            .createHmac('sha256', secret)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest('hex');

        // Step 2: Validate the signature
        if (generated_signature === razorpay_signature) {
            // Signature is valid
            // res.status(200).json({
            //     success: true,
            //     message: 'Payment verification successful!',
            // });
            await Payment.create({
                razorpay_order_id, razorpay_payment_id, razorpay_signature
            })
            res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`)
        } else {
            // Invalid signature
            res.status(400).json({
                success: false,
                message: 'Payment verification failed. Invalid signature.',
            });
        }
    } catch (error) {
        // Handle errors
        console.error('Error in payment verification:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error.',
        });
    }
};
