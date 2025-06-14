import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  // baseURL: "https://quiz-digitizer-server.vercel.app/",
  withCredentials: true,
});
const useAxiosPublic = () => {
  return axiosInstance;
};

export default useAxiosPublic;
