
import Logo from "../Logo";


const AuthLogoSection = () => {
  return (
    <div className="bg-[#CCDEEB] flex-[1.2] p-5 hidden md:flex md:justify-center md:items-center md:h-full ">
      <Logo imgClassName="w-[37.02px] h-[49.41px]" textClassName="text-customBlue text-3xl"/>
    </div>
  );
};

export default AuthLogoSection;
