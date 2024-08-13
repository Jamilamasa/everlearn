import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import ProtectedRoute from "./ProtectedRoute";
export const ROOT: string = "/";
export const SIGNIN: string = "/signin";
export const SIGNUP: string = "/signup";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: (
      <ProtectedRoute>
        <div>Hello world!</div>
      </ProtectedRoute>
    ),
  },
  { path: SIGNIN, element: <SignIn/> },
  { path: SIGNUP, element: <SignUp/> },
]);
