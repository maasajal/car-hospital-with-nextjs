import Link from "next/link";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-5 my-20">
      <div className="relative">
        <Image
          className="w-4/5 rounded-lg"
          src={"/assets/images/about_us/person.jpg"}
          alt="About person"
          height={200}
          width={250}
        />
        <Image
          className="absolute right-0 bottom-0 border-8 w-2/3 rounded-lg"
          src={"/assets/images/about_us/parts.jpg"}
          alt="about parts"
          height={200}
          width={250}
        />
      </div>
      <div className="space-y-5">
        <p className="text-[#FF3811]">About us</p>
        <h2 className="text-4xl font-bold max-w-72">
          We are qualified & of experience in this field
        </h2>
        <p className="leading-8">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
        <p className="leading-8">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
        <Link
          href="/get-more-info"
          className="btn bg-[#FF3811] border-none px-5 text-white"
        >
          Get More Info
        </Link>
      </div>
    </div>
  );
};
export default About;
