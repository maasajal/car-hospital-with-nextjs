import { getServiceDetails } from "@/services/getServices";

export const metadata = {
  title: "Service Details",
  description: "Car Service details page",
};

const ServiceDetails = async ({ params }) => {
  const details = await getServiceDetails(params.id);
  const { service_id, title, img, price, description, facility } =
    details.service;
  return (
    <div>
      <h2>Service details of {title}</h2>
    </div>
  );
};
export default ServiceDetails;
