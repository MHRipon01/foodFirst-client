
// import { Tooltip } from "@material-tailwind/react";
// import { GitHub } from "@mui/icons-material";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../Firebase/AuthProvider";

import toast from "react-hot-toast";
import { AiOutlineGithub } from "react-icons/ai";
import { Tooltip } from "flowbite-react";
const Login = () => {
  const { signIn, googleLogin, auth } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const password = form.get("password");
    const email = form.get("email");
    console.log({ password, email });

    const toastId = toast.loading("Logging try in..");
    try {
      await signIn(email, password);
      toast.success("Logged in...", { id: toastId });
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Logging in..");
    try {
      await signInWithPopup(auth, googleLogin);

      toast.success("Login successful", { id: toastId });
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };

  return (
    <div className="lg:h-[100vh] bg-[url('https://i.ibb.co/mHqfZcY/image.png')] flex items-center justify-center w-full bg-no-repeat">
      <div className=" border-blue-600 mx-5 border-2 shadow-2xl my-auto py-16 hover:shadow-[#92e1f6]   rounded-xl bg-clip-border">
        <form onSubmit={handleLogin}>
          <div className="   mx-auto  w-full lg:min-w-[500px]  ">
            <div className="relative  w-full lg:h-2/3     flex flex-col text-gray-700 bg-transparent bg-blend-color-burn  ">
              <div className="relative  grid mx-4 mb-4  overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-blue-500 to-[#92e1f6] bg-clip-border hover:shadow-[#92e1f6]">
                <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-black">
                  Sign In
                </h3>
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    name="email" required
                    className="w-full h-full focus:bg-white px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    name="password"
                    type="password"
                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-white border-t-transparent text-white outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-white"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="block w-full select-none rounded-lg bg-gradient-to-tr from-blue-500 to-[#92e1f6] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md   transition-all hover:shadow-lg hover:shadow-[#92e1f6] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  data-ripple-light="true"
                >
                  Sign In
                </button>
                <p className="flex justify-center mt-10 text-xl font-sans antialiased font-light leading-normal text-inherit">
                  Don&apos;t have an account?
                  <Link to="/register">
                    <button className="block ml-1 font-sans text-xl antialiased font-bold leading-normal text-blue-500">
                      Register{" "}
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
        <div className="w-full gap-3">
          <div className="flex justify-center items-center w-full">
           <div className=" justify-center text-center items-center  w-full select-none rounded-lg bg-gradient-to-tr from-blue-500 to-[#92e1f6] py-3  align-middle font-sans text-xs font-bold uppercase text-black shadow-md   transition-all hover:shadow-lg mt-8 hover:shadow-[#92e1f6] mx-1 flex">
            <button className="flex"
              onClick={handleGoogleLogin}
              
            >
              Login with &nbsp; &nbsp;
              <FcGoogle className="text-xl font-bold"></FcGoogle>
            </button>
           </div>
            
            <div className=" justify-center text-center items-center  w-full select-none rounded-lg bg-gradient-to-tr from-blue-500 to-[#92e1f6] py-3 mx-1 px-3 align-middle font-sans text-xs font-bold uppercase text-black shadow-md   transition-all hover:shadow-lg mt-8 hover:shadow-[#92e1f6] flex">
                <Tooltip  content="GitHub is'nt integrated yet!">
            <button className="flex"
             
            >
              Login with &nbsp; &nbsp;{" "}
              <div className="text-xl">
                <AiOutlineGithub></AiOutlineGithub>
              </div>
            </button>
            </Tooltip> 
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
