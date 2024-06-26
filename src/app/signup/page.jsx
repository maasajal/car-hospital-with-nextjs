"use client";

import SocialLogin from "@/components/SocialLogin/SocialLogin";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const axiosPublic = useAxiosPublic();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const res = await axiosPublic.post("/signup/api", newUser);
    if (res.status === 200) {
      e.target.reset();
    }
    // console.log(res);
    // const res = await axios.post("http://localhost:3000/signup/api", newUser);
    // const resp = await fetch("http://localhost:3000/signup/api", {
    //   method: "POST",
    //   body: JSON.stringify(newUser),
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
      <div className="w-full">
        <Image
          src={"/assets/images/login/login.svg"}
          alt=""
          height={540}
          width={540}
        />
      </div>
      <div className="border-2 p-10">
        <form onSubmit={handleSignUp} className="card-body space-y-3">
          <h2 className="text-center text-3xl font-PlayFair">Sign Up Now</h2>
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              id="name"
              type="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter a password"
              className="input input-bordered"
              required
            />
            <span
              className="absolute right-2 bottom-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="form-control">
            <input type="submit" value="Sign Up" className="btn btn-outline" />
          </div>
          <div className="text-center py-5 space-y-4">
            <SocialLogin />
            <p>
              Already have account?{" "}
              <Link href={"/login"} className="text-[#FF3811]">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
