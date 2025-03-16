import VerifyOtp from "@/Pages/Auth/VerifyOtp";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Courses from "../Pages/courses"
import Home from "@/Pages/Home";
export const ROOT: string = "/";
export const SIGNIN: string = "/signin";
export const SIGNUP: string = "/signup";
export const VERIFYOTP: string = '/verifyotp';
export const Course: string = '/courses';
export const HomePage: string = '/home';
export const SURVEYPAGE: string = '/survey';

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
  { path: Course, element: <Courses/> },
  { path: HomePage, element: <Home/> },
  { path: `${VERIFYOTP}/:userId`, element: <VerifyOtp/> },
]);
