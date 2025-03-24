import { useValidateToken } from "@/Hooks/auth.hooks";
import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { HomePage, SIGNIN } from "./Router";

type Props = { children: ReactNode };

const ProtectedRoute = (props: Props) => {
  const [auth, setAuth] = useState<boolean | "loading">("loading");
  const { validateToken } = useValidateToken();

  useEffect(() => {
    const valid = validateToken();
    setAuth(valid);
  }, []);

  if (!auth) {
    return <Navigate to={HomePage} />;
  }
  return <>{props.children}</>;
};

export default ProtectedRoute;
