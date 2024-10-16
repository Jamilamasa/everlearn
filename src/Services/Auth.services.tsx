import axios from "axios";

export const baseUrl = import.meta.env.VITE_BASE_URL;
const apiAuthService = axios.create({baseURL: `${baseUrl}/api/auth`})

const register = async (val: {
  fullName: string;
  email: string;
  password: string;
}) => {
  const res = await apiAuthService.post(`/register`, { ...val });
  return res.data;
};

const login = async (val: { email: string; password: string }) => {
  const res = await apiAuthService.post(`/login`, { ...val });
  return res.data;
};

// Verify OTP
const verifyOtp = async (val: { otp: string; uid: string }) => {
  const res = await apiAuthService.post(`/verify-email`, {...val});
  return res.data
};

export default { login, register, verifyOtp };
