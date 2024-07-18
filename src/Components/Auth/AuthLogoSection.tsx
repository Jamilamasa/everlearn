import { useNavigate } from "react-router-dom";
import logoIcon from "../../assets/icons/logoIcon.png";

type Props = {};

const AuthLogoSection = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#CCDEEB] flex-[1.2] p-5">
      <button onClick={() => navigate(-1)} className="text-custom-blue">
        X Back
      </button>
      {/* Logo */}

      <div className="flex gap-3 justify-center items-center h-full">
        <img
          src={logoIcon}
          alt="Logo Icon"
          className="w-[37.02px] h-[49.41px]"
        />
        <h1 className="text-custom-blue text-3xl">everlearn</h1>
      </div>
    </div>
  );
};

export default AuthLogoSection;
