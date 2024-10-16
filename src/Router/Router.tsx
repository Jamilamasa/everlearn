import VerifyOtp from "@/Pages/Auth/VerifyOtp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Root from "@/Layout/Root";
export const ROOT: string = "/";
export const SIGNIN: string = "/signin";
export const SIGNUP: string = "/signup";
export const VERIFYOTP: string = "/verifyotp";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: ROOT,
      element: (
        <ProtectedRoute>
          <Root/>
        </ProtectedRoute>
      ),
      children: [{ index: true, element: <>Dashboard</> }],
    },
    { path: SIGNIN, element: <SignIn /> },
    { path: SIGNUP, element: <SignUp /> },
    { path: `${VERIFYOTP}/:userId`, element: <VerifyOtp /> },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
