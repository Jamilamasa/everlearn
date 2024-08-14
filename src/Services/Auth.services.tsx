import axios from "axios";

const baseUrl = import.meta.env.BASE_URL;

const register = async (val: {
  firstName: string;
  lastName: string;
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

export default { login, register };
