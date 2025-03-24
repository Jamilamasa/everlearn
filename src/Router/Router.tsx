import VerifyOtp from "@/Pages/Auth/VerifyOtp";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Courses from "../Pages/courses"
import Home from "@/Pages/Home";
import Program from "@/Pages/programs";
export const ROOT: string = "/";
export const SIGNIN: string = "/signin";
export const SIGNUP: string = "/signup";
export const VERIFYOTP: string = '/verifyotp';
export const COURSE: string = '/courses';
export const PROGRAM: string = '/program';
export const HomePage: string = '/home';
export const SURVEYPAGE: string = '/survey';

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: (
      <ProtectedRoute>
         <Courses />
      </ProtectedRoute>
    ),
    children: [{index: true, element: <>Dashboard</>}]
  },
  { path: SIGNIN, element: <SignIn/> },
  { path: SIGNUP, element: <SignUp/> },
  { path: COURSE, element: (
    <ProtectedRoute>
      <Courses />
    </ProtectedRoute>
  ),
},
  { path: PROGRAM, element: (
    <ProtectedRoute>
      <Program />
    </ProtectedRoute>
  ),
},
  { path: HomePage, element: <Home/> },
  { path: `${VERIFYOTP}/:userId`, element: <VerifyOtp/> },
]);
