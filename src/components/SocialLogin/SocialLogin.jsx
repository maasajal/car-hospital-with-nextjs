import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <>
      <h5>Or Sign in with</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <button className="btn btn-outline">
          <FaGoogle /> Google
        </button>
        <button className="btn btn-outline">
          <FaGithub /> GitHub
        </button>
      </div>
    </>
  );
};
export default SocialLogin;
