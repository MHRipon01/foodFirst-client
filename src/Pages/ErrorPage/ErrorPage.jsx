// import styles from "../ErrorPage/ErrorPage.css";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="  min-h-screen">
      <section className=" min-h-screen  text-center">
        <div className="">
          <div className="row">
            <div className=" ">
              <div className="  ">
                <div className="four_zero_four_bg w-screen">
                  <h1 className="text-center text-8xl pt-11 ">404</h1>
                  <div className="w-full flex items-center justify-center ">
                    <img
                      src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                      alt=""
                    />
                  </div>
                </div>

                <div>
                  <h3 className="flex w-full justify-center items-center text-lg">
                    Look like you&apos;re lost
                  </h3>

                  <p>The page you are looking for not available!</p>

                  <div className="flex md:flex-none justify-center">
                    <Link to='/'>
					<button  className="bg-[#39ac31]   w-[120px]  py-5 flex justify-center items-center text-white font-bold rounded-lg mt-5">
                      Go to Home
                    </button>
					</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
