import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ROOT, VERIFYOTP } from "@/Router/Router";
import AuthServices from "@/Services/Auth.services";

// A hook for login
export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return AuthServices.login({
        email: email,
        password: password,
      });
    },
    mutationKey: ["LOGIN"],
    onSuccess: (data) => {
      sessionStorage.setItem("k7h4p9d2wq8c6n", data.token);
      navigate(ROOT);
      toast.success("Login Successful");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  return {mutate, isPending};
};

// A hook for registeration
export const useRegister = ()=>{
  const navigate = useNavigate();
  const { mutate, isPending} = useMutation({
    mutationFn: ({ fullName, email, password }: { email: string; password: string; fullName: string }) => {
      return AuthServices.register({
        fullName: fullName,
        email: email,
        password: password,
      });
    },
    mutationKey: ["REGISTER"],
    onSuccess: (data) => {
      toast.success(data.message);
      navigate(`${VERIFYOTP}/${data.user_id}`);
    },
    onError: (error:any)=>{toast.error(error.response.data.message);}
  });
  return {mutate, isPending}
}

// A hook to validate token
export const useValidateToken = () => {
  // Function to validate the token
  const validateToken = (): boolean => {
    const tokenString: string | null = sessionStorage.getItem("k7h4p9d2wq8c6n");

    if (!tokenString) {
      return false;
    }

    try {
      const decodedToken: any = jwtDecode(tokenString);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  };

  // Validate token on hook initialization
  useEffect(() => {
    validateToken();
  }, []);

  return { validateToken };
};
