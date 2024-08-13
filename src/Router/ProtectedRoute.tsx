import { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";
import { SIGNIN } from "./Router";

type Props = { children: ReactNode };

const ProtectedRoute = (props: Props) => {
  const [auth, setAuth] = useState(true);
  if (!auth) {
    return <Navigate to={SIGNIN} />;
  }
  return <>{props.children}</>;
};

export default ProtectedRoute;
