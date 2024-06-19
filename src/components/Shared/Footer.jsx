import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#151515] mt-10">
      <footer className="footer py-10 px-8 container mx-auto text-white flex flex-wrap justify-center md:justify-between gap-8">
        <aside>
          <Image
            src={"/assets/logo.svg"}
            alt="Car doctor logo"
            width={100}
            height={50}
          />
          <p className="py-5 leading-6">
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br />
            trainer who is also a serial .
          </p>
          <nav>
            <div className="grid grid-flow-col gap-2">
              <a className="btn rounded-full bg-slate-600 text-white border-none">
                <FaGoogle />
              </a>
              <a className="btn rounded-full bg-slate-600 text-white border-none">
                <FaTwitter />
              </a>
              <a className="btn rounded-full bg-slate-600 text-white border-none">
                <FaInstagram />
              </a>
              <a className="btn rounded-full bg-slate-600 text-white border-none">
                <FaLinkedin />
              </a>
            </div>
          </nav>
        </aside>
        <nav className="flex flex-col gap-5">
          <h6 className="text-2xl font-semibold mb-5">Home</h6>
          <Link href="/" className="link link-hover">
            Home
          </Link>
          <Link href="/services" className="link link-hover">
            Service
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav className="flex flex-col gap-5">
          <h6 className="text-2xl font-semibold mb-5">Company</h6>
          <Link href="/" className="link link-hover">
            Why Car Doctor
          </Link>
          <Link href="/about" className="link link-hover">
            About
          </Link>
        </nav>
        <nav className="flex flex-col gap-5">
          <h6 className="text-2xl font-semibold mb-5">Support</h6>
          <Link href="#" className="link link-hover">
            Support Center
          </Link>
          <Link href="#Feedback" className="link link-hover">
            FeedBack
          </Link>
          <Link href="#" className="link link-hover">
            Accessability
          </Link>
        </nav>
      </footer>
    </div>
  );
};
export default Footer;
