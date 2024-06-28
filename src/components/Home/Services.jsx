"use client";

import Link from "next/link";
import ServiceCard from "../cards/ServiceCard";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const axiosPublic = useAxiosPublic();

const getServices = async () => {
  const res = await axiosPublic.get("/services/api/all-service");
  const services = res.data;
  return services;
};

const Services = async () => {
  const { services } = await getServices();
  return (
    <div id="services">
      <div className="text-center max-w-2xl mx-auto space-y-5">
        <p className="text-[#FF3811]">Service</p>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p className="leading-8">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {services?.length > 0 &&
          services?.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
      </div>
      <div className="text-center">
        <Link href="/more-services" className="btn btn-outline text-[#FF3811]">
          More Services
        </Link>
      </div>
    </div>
  );
};
export default Services;
