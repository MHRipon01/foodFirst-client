import { Link,  useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
// import { AiOutlineGithub } from "react-icons/ai";
import {  updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { AuthContext } from "../../Firebase/AuthProvider";
// import { Tooltip } from "flowbite-react";

const Register = () => {
  const { createUser, auth ,logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  // const location = useLocation();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const password = form.get("password");
    const email = form.get("email");
    console.log({ name, password, email });
    let toastId;

    if (!name && !email) {
      toastId = toast.error("Invalid input...");
      console.log(toastId);
    }
    // toastId = toast.success('loading...');
    else {
      toastId = toast.loading("loading...");
    }

    try {
      await createUser(email, password);

      console.log("created");
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
        // phoneNumber: number
      });

      toast.success("Registration complete! Please Login now", { id: toastId });
     
      logOut()
      .then(navigate("/login"))
      .catch(error => {
        console.log(error);
         
      })
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }
  };

  // const handleGoogleLogin = async () => {
  //   const toastId = toast.loading("Logging in..");
  //   try {
  //     await signInWithPopup(auth, googleLogin);

  //     toast.success("Login successful", { id: toastId });
  //     navigate(location?.state ? location.state : "/");
  //   } catch (err) {
  //     toast.error(err.message, { id: toastId });
  //   }
  // };



  

  return (
    <div className="bg-gray-200 h-full lg:h-[100vh] bg-[url('https://i.ibb.co/mHqfZcY/image.png')]  from-gray-200 to-blue-gray-700 flex justify-center items-center">
      <div className=" border-2 my-auto py-16 px-5   border-blue-600 shadow-2xl hover:shadow-[#92e1f6] mx-auto rounded-xl bg-clip-border      ">
        <form onSubmit={handleRegister}>
          <div className="lg:min-w-[500px] w-full h-full mx-auto   ">
            <div className="relative  w-full lg:h-2/3   flex flex-col text-gray-700 bg-transparent bg-blend-color-burn ">
              <div className="relative  grid mx-4 mb-4  overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-blue-500 to-[#92e1f6] bg-clip-border hover:shadow-[#92e1f6]">
                <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-black">
                  Register
                </h3>
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    name="name"
                    className="w-full focus:bg-gray-50 h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent  outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Name
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-4 px-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    name="photoURL"
                    className="w-full focus:bg-white h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Photo URL
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    name="email"
                    required
                    className="w-full focus:bg-white h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-black outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full  h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-white border-t-transparent text-white outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-white"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>
              </div>
              <div className="p-6 pt-6">
                <button
                  type="submit"
                  className="block w-full select-none rounded-lg bg-gradient-to-tr from-blue-500 to-[#92e1f6] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md   transition-all hover:shadow-lg hover:shadow-[#92e1f6] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Register
                </button>
                <p className="flex justify-center mt-6 font-sans text-xl antialiased font-light leading-normal text-inherit">
                  Already have an account?
                  <Link to="/login">
                    <button className="block ml-1 font-sans text-xl antialiased font-bold leading-normal text-blue-500">
                      Login
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
        {/* <div className="w-full gap-3 flex justify-center">
          <div
            onClick={handleGoogleLogin}
            className="flex justify-center items-center w-full"
          >
            <button  className=" justify-center text-center items-center  w-full select-none rounded-lg bg-gradient-to-tr from-blue-500
             to-[#92e1f6] py-3  align-middle font-sans text-xs font-bold uppercase text-black shadow-md   transition-all hover:shadow-lg mt-8 hover:shadow-[#92e1f6] mx-1 flex">
              Register with &nbsp; 
              <FcGoogle className="text-xl font-bold"></FcGoogle>
            </button>
          </div>
          <div className="w-full">
            
            <Tooltip  content="GitHub is'nt integrated yet!">
              <button  className=" justify-center text-center items-center  w-full select-none rounded-lg bg-gradient-to-tr from-blue-500 to-[#92e1f6] py-3 mx-1 align-middle font-sans text-xs font-bold uppercase text-black shadow-md   transition-all hover:shadow-lg mt-8 hover:shadow-[#92e1f6] flex">
                Register with &nbsp; &nbsp;{" "}
                <AiOutlineGithub className="text-xl"></AiOutlineGithub>
              </button>
            </Tooltip>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Register;
