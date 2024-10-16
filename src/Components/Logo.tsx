import React from 'react';
import logoIcon from "../assets/icons/logoIcon.png";

interface LogoProps {
  imgClassName?: string;
  textClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ imgClassName = "w-[37.02px] h-[49.41px]", textClassName = "text-custom-blue text-3xl" }) => {
  return (
    <div className="flex gap-3">
      <img
        src={logoIcon}
        alt="Logo Icon"
        className={imgClassName} // img class passed via props
      />
      <h1 className={`${textClassName}`}>everlearn</h1>
    </div>
  );
};

export default Logo;
