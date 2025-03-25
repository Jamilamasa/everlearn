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
const verifyOtp = async (val: { otp: string; uid: string }) => {
  const res = await axios.post(`${baseUrl}/api/auth/verify-email`, {...val});
  return res.data
};
const authToken = sessionStorage.getItem('k7h4p9d2wq8c6n');

const getCourses = async () => {
  const res = await axios.get(`${baseUrl}/api/course`, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  });
  return res.data;
};

const getPrograms = async () => {
  const res = await axios.get(`${baseUrl}/api/programs`, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  });
  return res.data;
};

const addCourseToProgram = async (courseDetails: { title: string; description: string; programId: string }) => {
  const res = await axios.post(`${baseUrl}/api/programs/add-course`, { ...courseDetails }, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  });
  return res.data;
};

const recommend = async (val: { skillLevel: string, goal:string, interest:string, timeCommitment: string, learningFormat:string }) => {
  const res = await axios.post(`${baseUrl}/api/recommend/recommend`, {...val}, {
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  });
  return res.data
};

export default { login, register, verifyOtp, recommend, getCourses, getPrograms, addCourseToProgram };
