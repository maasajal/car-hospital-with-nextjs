import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        {banners.map((banner, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item w-full rounded-xl bg-cover"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
          >
            <div className="h-full w-full left-0 flex items-center text-white rounded-xl py-10">
              <div className="space-y-5 pl-20">
                <h1 className="text-3xl md:text-6xl font-semibold max-w-md leading-tight">
                  {banner.title}
                </h1>
                <p className="max-w-md leading-8">{banner.description}</p>
                <div className="flex gap-5">
                  <Link
                    href="discover-more"
                    className="btn bg-[#FF3811] border-none text-white"
                  >
                    Discover More
                  </Link>
                  <Link
                    href="latest-project"
                    className="btn btn-outline text-white"
                  >
                    Latest Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute flex gap-4 transform -translate-y-1/2 bottom-4 right-10 ">
              <a href={banner.prev} className="btn btn-circle">
                <FaArrowLeft />
              </a>
              <a href={banner.next} className="btn btn-circle">
                <FaArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Banner;

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    prev: "#slide6",
    next: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    prev: "#slide1",
    next: "#slide3",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    prev: "#slide2",
    next: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    prev: "#slide3",
    next: "#slide5",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    prev: "#slide4",
    next: "#slide6",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    prev: "#slide5",
    next: "#slide1",
  },
];
