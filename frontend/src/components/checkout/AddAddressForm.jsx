import {useForm} from "react-hook-form";
import {FaAddressCard} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import Spinners from "../shared/Spinners";
import InputField from "../shared/InputField";
import toast from "react-hot-toast";
import {addUpdateUserAddress} from "../../store/actions";
import {useEffect} from "react";

const AddAddressForm = ({address, setOpenAddressModal}) => {
     const {btnLoader} = useSelector((state) => state.errors);
     const dispatch = useDispatch();

     const {
          register,
          handleSubmit,
          reset,
          setValue,
          formState: {errors},
     } = useForm({mode: "onTouched"});

     const onSaveAddressHandler = (data) => {
          dispatch(addUpdateUserAddress(data, toast, address?.addressId, setOpenAddressModal));
     };

     useEffect(() => {
          if (address?.addressId) {
               setValue("buildingName", address?.buildingName);
               setValue("city", address?.city);
               setValue("state", address?.state);
               setValue("pincode", address?.pincode);
               setValue("street", address?.street);
               setValue("country", address?.country);
          }
     }, [address]);

     return (
          <div className=''>
               <form onSubmit={handleSubmit(onSaveAddressHandler)} className=''>
                    <div className='flex justify-center items-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4'>
                         <FaAddressCard className='mr-2 text-2xl' />
                         {!address?.addressId ? "Add Address" : "Update Address"}
                    </div>
                    <div className='flex flex-col gap-4'>
                         <InputField
                              label='Building Name'
                              required
                              id='buildingName'
                              type='text'
                              register={register}
                              errors={errors}
                              message='*Building name is required'
                              placeholder='Enter building name'
                         />

                         <InputField
                              label='City'
                              required
                              id='city'
                              type='text'
                              register={register}
                              errors={errors}
                              message='*City is required'
                              placeholder='Enter city'
                         />

                         <InputField
                              label='State'
                              required
                              id='state'
                              type='text'
                              register={register}
                              errors={errors}
                              message='*State is required'
                              placeholder='Enter state'
                         />

                         <InputField
                              label='Pin Code'
                              required
                              id='pincode'
                              type='text'
                              register={register}
                              errors={errors}
                              message='*Pincode is required'
                              placeholder='Enter pincode'
                         />

                         <InputField
                              label='Street'
                              required
                              id='street'
                              type='text'
                              register={register}
                              errors={errors}
                              message='*Street is required'
                              placeholder='Enter street'
                         />

                         <InputField
                              label='Country'
                              required
                              id='country'
                              type='text'
                              register={register}
                              errors={errors}
                              message='*Country is required'
                              placeholder='Enter country'
                         />
                    </div>
                    <button
                         disabled={btnLoader}
                         className='text-white bg-custom-blue px-4 py-2 rounded-md mt-4'
                         type='submit'>
                         {btnLoader ? (
                              <>
                                   <Spinners /> Loading...
                              </>
                         ) : (
                              <>Save</>
                         )}
                    </button>
               </form>
          </div>
     );
};

export default AddAddressForm;
