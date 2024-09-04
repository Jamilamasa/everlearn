import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

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
