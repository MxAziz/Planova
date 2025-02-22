import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://planova1.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
