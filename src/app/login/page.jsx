"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (resp.status === 200) {
      router.push("/");
    }
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
        <form onSubmit={handleLogin} className="card-body space-y-3">
          <h2 className="text-center text-3xl font-PlayFair">Sign In Now</h2>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
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
            />
            <span
              className="absolute right-2 bottom-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="form-control">
            <input type="submit" value="Sign In" className="btn btn-outline" />
          </div>
          <div className="text-center py-5 space-y-4">
            <SocialLogin />
            <p>
              Don't have account?{" "}
              <Link href={"/signup"} className="text-[#FF3811]">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
