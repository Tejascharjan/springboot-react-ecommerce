import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Skeleton from "../shared/Skeleton";
import { FaCheckCircle } from "react-icons/fa";
import { paymentConfirmation } from "../../store/actions";
import toast from "react-hot-toast";

const PaymentConfirmation = () => {
     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
     const dispatch = useDispatch();
     const [errorMessage, setErrorMessage] = useState("");
     const { cart } = useSelector((state) => state.carts);
     const [loading, setLoading] = useState(false);
     const { selectedUserCheckoutAddress } = useSelector((state) => state.auth);

     const paymentId = searchParams.get("razorpay_payment_id");
     const paymentStatus = searchParams.get("razorpay_payment_link_status");

     useEffect(() => {
          const sendData = {
               addressId: selectedUserCheckoutAddress.addressId,
               pgName: "Razorpay",
               pgPaymentId: paymentId,
               pgStatus: paymentStatus,
               pgResponseMessage: "Payment successful",
          };
          if (paymentId && paymentStatus === "paid" && cart) {
               dispatch(paymentConfirmation(sendData, setErrorMessage, setLoading, toast));
          }
     }, [paymentId, paymentStatus]);

     return (
          <div className='min-h-screen flex items-center justify-center'>
               {loading ? (
                    <div className='max-w-lg mx-auto'>
                         <Skeleton />
                    </div>
               ) : (
                    <div className='p-8 rounded-lg shadow-lg text-center max-w-md mx-auto border border-gray-200'>
                         <div className='text-green-500 mb-4 flex  justify-center'>
                              <FaCheckCircle size={64} />
                         </div>
                         <h2 className='text-3xl font-bold text-gray-800 mb-2'>Payment Successful!</h2>
                         <p className='text-gray-600 mb-6'>
                              Thank you for your purchase! Your payment was successful, and we’re processing your order.
                         </p>
                    </div>
               )}
          </div>
     );
};

export default PaymentConfirmation;
