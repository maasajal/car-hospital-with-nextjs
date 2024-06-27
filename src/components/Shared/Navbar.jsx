"use client";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const navLinks = [
    {
      navName: "Home",
      path: "/",
    },
    {
      navName: "About",
      path: "/about",
    },
    {
      navName: "Services",
      path: "/services",
    },
    {
      navName: "Blog",
      path: "/blog",
    },
    {
      navName: "Contact",
      path: "/contact",
    },
  ];
  const session = useSession();
  return (
    <div className="bg-base-100">
      <div className="navbar py-6 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 capitalize"
            >
              {navLinks.map((nav) => (
                <Link key={nav.path} href={nav.path}>
                  {nav.navName}
                </Link>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost h-full">
            <Image
              src={"/assets/logo.svg"}
              alt="Car doctor logo"
              width={100}
              height={50}
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase gap-5">
            {navLinks.map((nav) => (
              <Link key={nav.path} href={nav.path}>
                {nav.navName}
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <BsHandbag className="text-xl font-bold" />
          <FaSearch />
          <Link href={"/"} className="btn btn-outline text-red-400 px-5">
            Appointment
          </Link>
          {session?.status === "loading" && (
            <span className="loading loading-dots loading-md"></span>
          )}
          {session?.status === "unauthenticated" && (
            <Link href={"/login"} className="btn btn-outline text-red-400">
              login
            </Link>
          )}
          {session?.status === "authenticated" && (
            <button
              onClick={() => signOut()}
              className="btn btn-outline text-red-400"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
