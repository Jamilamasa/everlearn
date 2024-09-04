import { useValidateToken } from "@/Hooks/auth.hooks";
import { ROOT } from "@/Router/Router";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import AuthLogoSection from "./AuthLogoSection";

type Props = { title: "SignUp" | "SignIn" };

const AuthPage = (props: Props) => {
  const [auth, setAuth] = useState<boolean | "loading">("loading");
  const { validateToken } = useValidateToken();

  useEffect(() => {
    const valid = validateToken();
    setAuth(valid);
  }, []);

  if(auth !== 'loading' && auth){return <Navigate to={ROOT} />;}
  if(auth === 'loading'){return <>loading...</>}
  return (
    <div className="flex h-screen">
      <AuthLogoSection />
      <AuthForm title={props.title} />
    </div>
  );
};

export default AuthPage;
