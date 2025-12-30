import { Alert, AlertTitle } from "@mui/material";
const RazorpayPayment = () => {
     return (
          <div className='h-96 flex justify-center items-center'>
               <Alert severity='warning' variant='filled' style={{ maxWidth: "400px" }}>
                    <AlertTitle>Razorpay Unavailable</AlertTitle>
                    Currently unavailable.
               </Alert>
          </div>
     );
};

export default RazorpayPayment;
