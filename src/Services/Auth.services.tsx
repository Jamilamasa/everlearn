import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const register = async (val: {
  fullName: string;
  email: string;
  password: string;
}) => {
  const res = await axios.post(`${baseUrl}/api/auth/register`, { ...val });
  return res.data;
};
const login = async (val: { email: string; password: string }) => {
  const res = await axios.post(`${baseUrl}/api/auth/login`, { ...val });
  return res.data;
};
const verifyOtp = async (val: { otp: string; email: string }) => {
  const res = await axios.post(`${baseUrl}/api/auth/verify-email`, {...val});
  return res.data
};

export default { login, register, verifyOtp };
