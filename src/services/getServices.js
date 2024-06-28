import useAxiosPublic from "@/hooks/useAxiosPublic";

const axiosPublic = useAxiosPublic();

export const getServices = async () => {
  const res = await axiosPublic.get("/services/api/all-service");
  const services = res.data;
  return services;
};

export const getServiceDetails = async (id) => {
  const res = await axiosPublic.get(`/services/api/${id}`);
  const service = res.data;
  return service;
};
