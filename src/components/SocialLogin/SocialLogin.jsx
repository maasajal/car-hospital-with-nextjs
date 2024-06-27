"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = async (provider) => {
    const resp = signIn(provider, { redirect: false });
  };
  if (session.status === "authenticated") {
    router.push("/");
  }
  return (
    <>
      <h5>Or Sign in with</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <button
          onClick={() => handleSocialLogin("google")}
          className="btn btn-outline"
        >
          <FaGoogle /> Google
        </button>
        <button
          onClick={() => handleSocialLogin("github")}
          className="btn btn-outline"
        >
          <FaGithub /> GitHub
        </button>
      </div>
    </>
  );
};
export default SocialLogin;
