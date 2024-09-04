
import Logo from "../Logo";

type Props = {};

const AuthLogoSection = (props: Props) => {
  return (
    <div className="bg-[#CCDEEB] flex-[1.2] p-5 hidden md:block ">
      <Logo />
    </div>
  );
};

export default AuthLogoSection;
