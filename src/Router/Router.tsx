import VerifyOtp from "@/Pages/Auth/VerifyOtp";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import ProtectedRoute from "./ProtectedRoute";
export const ROOT: string = "/";
export const SIGNIN: string = "/signin";
export const SIGNUP: string = "/signup";
export const VERIFYOTP: string = '/verifyotp';

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: (
      <ProtectedRoute>
        <div>If you see this page, you are logged in</div>
      </ProtectedRoute>
    ),
    children: [{index: true, element: <>Dashboard</>}]
  },
  { path: SIGNIN, element: <SignIn/> },
  { path: SIGNUP, element: <SignUp/> },
  { path: `${VERIFYOTP}/:userId`, element: <VerifyOtp/> },
]);
