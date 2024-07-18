import { useNavigate } from "react-router-dom";
import Logo from "../Logo";

type Props = {};

const AuthLogoSection = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#CCDEEB] flex-[1.2] p-5 hidden md:block ">
      <button onClick={() => navigate(-1)} className="text-custom-blue">
        X Back
      </button>
      {/* Logo */}
      <Logo />
    </div>
  );
};

export default AuthLogoSection;
