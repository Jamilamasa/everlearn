import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePasswordToggle } from "../../Hooks/functionHooks";
import { ROOT, SIGNIN, SIGNUP, VERIFYOTP } from "../../Router/Router";
import AuthService from "../../Services/Auth.services";
import loader from "../../assets/icons/load.gif";

type Props = { title: "SignUp" | "SignIn" };
interface ILoginDetails {
  email: undefined | string;
  password: undefined | string;
  fullName?: undefined | string;
}

const AuthForm = (props: Props) => {
  //const [InputType, Icon] = usePasswordToggle();
  const [loginDetails, setLoginDetails] = useState<ILoginDetails>({
    email: undefined,
    password: undefined,
  });
  const [registerDetails, setRegisterDetails] = useState<ILoginDetails>({
    email: undefined,
    password: undefined,
    fullName: undefined,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // To render sign in components or sign up components
  const isSignUp: boolean = props.title === "SignUp";
  const isSignIn: boolean = props.title === "SignIn";

  // Handle input changes depending on the page
  const handleInputChange =
    (field: keyof ILoginDetails) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (isSignUp) {
        setRegisterDetails((prevState) => ({ ...prevState, [field]: value }));
      } else if (isSignIn) {
        setLoginDetails((prevState) => ({ ...prevState, [field]: value }));
      }
    };

  // Register
  const handleRegister = async () => {
    if (
      registerDetails.fullName &&
      registerDetails.email &&
      registerDetails.password
    ) {
      setLoading(true);
      try {
        const response = await AuthService.register({
          fullName: registerDetails.fullName,
          email: registerDetails.email,
          password: registerDetails.password,
        });
        toast.success(response.message);
        setLoading(false);
        // TODO: PASS UID INSTEAD OF EMAIL
        navigate(`${VERIFYOTP}/${response.user_id}`);
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error(error.response.data.message);
      }
    }
  };

  // Login
  const handleSignIn = async () => {
    if (loginDetails.email && loginDetails.password) {
      setLoading(true);
      try {
        const response = await AuthService.login({
          email: loginDetails.email,
          password: loginDetails.password,
        });
        sessionStorage.setItem("k7h4p9d2wq8c6n", response.token);
        navigate(ROOT);
        toast.success("Login Successful");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="flex-[2] h-full lg:p-20 lg:w-full">
      <div className="lg:h-full w-80 lg:w-96 m-auto mt-24">
        <h1 className="text-customBlue font-[700] text-3xl mb-5">
          {isSignUp ? "Sign Up" : isSignIn ? "Sign In" : ""}
        </h1>
        <p className="text-customLightBlue mb-16">
          {isSignUp
            ? "Please fill your information below"
            : isSignIn
            ? "Welcome Back Learner"
            : ""}
        </p>
        {/* Form */}
        <form
          className="mb-6"
          onSubmit={(e) => {
            if (isSignUp) {
              handleRegister();
            } else {
              handleSignIn();
            }
            e.preventDefault();
          }}
        >
          <div className="relative mb-8">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.2538 5.40036C13.2538 8.38289 10.9027 10.8007 8.00252 10.8007C5.1023 10.8007 2.75121 8.38289 2.75121 5.40036C2.75121 2.41782 5.1023 0 8.00252 0C10.9027 0 13.2538 2.41782 13.2538 5.40036ZM12.5098 13.8434C14.1795 14.1815 15.2696 14.7331 15.7367 15.6228C16.0876 16.3171 16.0876 17.1437 15.7367 17.8381C15.2696 18.7278 14.2228 19.3149 12.4925 19.6174C11.7215 19.7729 10.9411 19.874 10.1567 19.9199C9.42998 20 8.70327 20 7.96792 20H6.64428C6.36743 19.9644 6.09925 19.9466 5.83971 19.9466C5.05527 19.9063 4.27466 19.8082 3.50387 19.653C1.83418 19.3327 0.744119 18.7633 0.276951 17.8737C0.096607 17.529 0.00152986 17.144 0.000110501 16.7527C-0.00364853 16.3589 0.0885532 15.9705 0.268299 15.6228C0.726816 14.7331 1.81687 14.1548 3.50387 13.8434C4.27806 13.6915 5.06133 13.5934 5.84836 13.5498C7.28803 13.4338 8.73432 13.4338 10.174 13.5498C10.958 13.5955 11.7382 13.6936 12.5098 13.8434Z"
                  fill="#868AA5"
                />
              </svg>
            </div>
            <input
              type="email"
              id="nameInput"
              className={`pl-10 block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#3C4071] bg-[#fff] ${
                isSignUp &&
                registerDetails.email &&
                "border-[#80BEFC] border-[3px]"
              } ${
                isSignIn &&
                loginDetails.email &&
                "border-[#80BEFC] border-[3px]"
              } rounded-[10px]   appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#80BEFC] focus:border-[3px] focus:bg-[#fff] placeholder-shown:bg-[#F5F5F7] peer`}
              placeholder=" "
              autoComplete="off"
              value={
                isSignUp
                  ? registerDetails.email
                  : isSignIn
                  ? loginDetails.email
                  : ""
              }
              onChange={handleInputChange("email")}
              required
            />
            <label
              htmlFor="nameInput"
              className="absolute text-sm text-[#3C4071] dark:text-[#3C4071] duration-300 bg-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2  ml-9 peer-focus:px-2 peer-focus:mx-2 peer-focus:text-[#3C4071] peer-focus:dark:text-[#3C4071] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:bg-white peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 peer-placeholder-shown:text-[#8B8FA8]  peer-placeholder-shown:bg-transparent"
            >
              Email
            </label>
          </div>

          {isSignUp && (
            <div className="relative mb-8">
              <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.54175 0C4.23007 0 3.16675 1.06332 3.16675 2.375V16.625C3.16675 17.9367 4.23007 19 5.54175 19H13.4584C14.7701 19 15.8334 17.9367 15.8334 16.625V2.375C15.8334 1.06332 14.7701 0 13.4584 0H5.54175ZM9.50008 15.8333C9.93731 15.8333 10.2917 15.4789 10.2917 15.0417C10.2917 14.6044 9.93731 14.25 9.50008 14.25C9.06286 14.25 8.70841 14.6044 8.70841 15.0417C8.70841 15.4789 9.06286 15.8333 9.50008 15.8333Z"
                    fill="#2F3367"
                  />
                </svg>
              </div>
              <input
                type="text"
                className={`pl-10 block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#3C4071] bg-[#fff] ${
                  isSignUp &&
                  registerDetails.fullName &&
                  "border-[#80BEFC] border-[3px]"
                } ${
                  isSignIn &&
                  loginDetails.fullName &&
                  "border-[#80BEFC] border-[3px]"
                } rounded-[10px]   appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#80BEFC] focus:border-[3px] focus:bg-[#fff] placeholder-shown:bg-[#F5F5F7] peer`}
                placeholder=" "
                autoComplete="off"
                value={isSignUp ? registerDetails.fullName : ""}
                onChange={handleInputChange("fullName")}
                required
              />
              <label
                htmlFor="mobileNumberInput"
                className="absolute text-sm text-[#3C4071] dark:text-[#3C4071] duration-300 bg-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2  ml-9 peer-focus:px-2 peer-focus:mx-2 peer-focus:text-[#3C4071] peer-focus:dark:text-[#3C4071] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:bg-white peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 peer-placeholder-shown:text-[#8B8FA8]  peer-placeholder-shown:bg-transparent"
              >
                Name
              </label>
            </div>
          )}

          <div className="relative mb-8">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.33325 2.5C1.95254 2.5 0.833252 3.61929 0.833252 5V15C0.833252 16.3807 1.95254 17.5 3.33325 17.5H16.6666C18.0473 17.5 19.1666 16.3807 19.1666 15V5C19.1666 3.61929 18.0473 2.5 16.6666 2.5H3.33325ZM5.53343 6.0265C5.17986 5.73187 4.65439 5.77964 4.35975 6.1332C4.06512 6.48676 4.11289 7.01224 4.46645 7.30687L8.39948 10.5844C9.32659 11.357 10.6733 11.357 11.6004 10.5844L15.5334 7.30687C15.887 7.01224 15.9348 6.48676 15.6401 6.1332C15.3455 5.77964 14.82 5.73187 14.4665 6.0265L10.5334 9.30402C10.2244 9.56156 9.77549 9.56156 9.46645 9.30403L5.53343 6.0265Z"
                  fill="#868AA5"
                />
              </svg>
            </div>

            <input
              type="password"
              id="password"
              className={`pl-10 block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#3C4071] bg-[#fff] ${
                isSignUp &&
                registerDetails.password &&
                "border-[#80BEFC] border-[3px]"
              } ${
                isSignIn &&
                loginDetails.password &&
                "border-[#80BEFC] border-[3px]"
              } rounded-[10px]   appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#80BEFC] focus:border-[3px] focus:bg-[#fff] placeholder-shown:bg-[#F5F5F7] peer`}
              placeholder=" "
              value={
                isSignUp
                  ? registerDetails.password
                  : isSignIn
                  ? loginDetails.password
                  : ""
              }
              onChange={handleInputChange("password")}
              required
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-[#3C4071] dark:text-[#3C4071] duration-300 bg-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2  ml-9 peer-focus:px-2 peer-focus:mx-2 peer-focus:text-[#3C4071] peer-focus:dark:text-[#3C4071] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:bg-white peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 peer-placeholder-shown:text-[#8B8FA8]  peer-placeholder-shown:bg-transparent"
            >
              Password
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-customBlue p-4 rounded-lg text-white w-40 flex justify-between"
            >
              {loading ? (
                <img className="h-[25px]" src={loader} alt="Loading..." />
              ) : (
                <>
                  Next &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &gt;
                </>
              )}
            </button>
          </div>
        </form>
        <hr />
        <div className="mt-6 flex justify-between">
          {/* TODO: Add the link here */}
          {isSignUp ? (
            <>
              <p>Already have an account&#63;</p>
              <Link to={SIGNIN} className="text-customBlue">
                Login to your account
              </Link>
            </>
          ) : isSignIn ? (
            <>
              <p>Don't have an account&#63;</p>
              <Link to={SIGNUP} className="text-customBlue">
                Click here to register
              </Link>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
