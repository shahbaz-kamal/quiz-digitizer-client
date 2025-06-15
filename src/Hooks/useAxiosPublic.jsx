import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL: "https://e23f-103-55-145-10.ngrok-free.app/",
  withCredentials: true,
  timeout: 1000 * 60 * 10,
});
const useAxiosPublic = () => {
  return axiosInstance;
};

export default useAxiosPublic;
