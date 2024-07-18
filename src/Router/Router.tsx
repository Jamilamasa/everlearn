import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import ProtectedRoute from "./ProtectedRoute";
export const ROOT: string = "/";
export const LOGIN: string = "/login";
export const SIGNUP: string = "/register";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: (
      <ProtectedRoute>
        <div>Hello world!</div>
      </ProtectedRoute>
    ),
  },
  { path: LOGIN, element: <div>Login Page</div> },
  { path: SIGNUP, element: <SignUp/> },
]);
