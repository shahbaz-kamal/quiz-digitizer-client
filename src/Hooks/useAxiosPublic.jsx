import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL: "https://6703-103-55-145-6.ngrok-free.app/",
  withCredentials: true,
  // timeout: 1000 * 60 * 15,
});
const useAxiosPublic = () => {
  return axiosInstance;
};

export default useAxiosPublic;
