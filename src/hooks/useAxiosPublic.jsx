import axios from "axios";
const axiosPublic = axios.create({
  baseURL: process.env.LOCAL_SERVER,
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
