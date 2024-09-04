import { useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

type UsePasswordToggleReturn = [string, JSX.Element];

export const usePasswordToggle = (): UsePasswordToggleReturn => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setVisible(prevVisible => !prevVisible);
  };

  const Icon = visible ? (
    <IoMdEyeOff onClick={toggleVisibility} />
  ) : (
    <IoMdEye onClick={toggleVisibility} />
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};
