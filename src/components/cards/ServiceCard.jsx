import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service || {};
  return (
    <div className="card card-compact space-y-5 p-6">
      <figure>
        <Image
          src={img}
          alt={title}
          height={250}
          width={430}
          className="rounded-lg"
        />
      </figure>
      <div className="">
        <h2 className="card-title">{title} </h2>
        <div className="flex items-center justify-between ">
          <p className="font-semibold text-[#FF3811] ">Price: ${price} </p>
          <Link href={`/services/${_id}`}>
            <button className="btn">
              <FaArrowRight className="text-[#FF3811]" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
