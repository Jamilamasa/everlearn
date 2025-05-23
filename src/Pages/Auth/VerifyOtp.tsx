import { InputOTPForm } from "@/Components/VerifyOtpForm";
import { SIGNIN } from "@/Router/Router";
import AuthServices from "@/Services/Auth.services";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  let { userId } = useParams();

  const handleSetOtp = (otp: string) => {
    setOtp(() => otp);
  };

  const handleVerifyOtp = async () => {
    console.log(otp)
    setLoading(true);
    try {
      if (userId && otp.length === 6) {
        const response = await AuthServices.verifyOtp({ otp, uid: userId });
        toast.success(`${response.message} proceed to login`);
        setLoading(false);
        navigate(SIGNIN)
      } else if (!userId) {
        toast.error("Invalid User Id, please try again");
      } else {
        toast.error("OTP length is less than 6")
      }
    } catch (error) {
      console.log(error)
      setLoading(false);
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <InputOTPForm handleSetOtp={handleSetOtp} handleVerifyOtp={handleVerifyOtp} loadingState={loading}/>
    </div>
  );
};

export default VerifyOtp;
