import React from "react";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
import logo from '../../assets/healthy-food-salad-svgrepo-com.svg'
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-200 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
              href="/"
            >
                <div className="flex justify-center items-center">
                  <div className="max-w-[60px]">
                     <img src={logo} alt="" />
                    </div> 
              <h2 className="text-xl">
              FoodFirst
                </h2>
                </div>
             
            </a>
            <button
              className=" cursor-pointer text-3xl leading-none px-3 py-1 border-solid border-transparent rounded  block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FcViewDetails></FcViewDetails>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2">Available Foods</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2">Add Food</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2">Manage My Foods</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2">My Food Request</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/login">
                  <div className="px-4 py-2 flex items-center hover:text-white rounded-md uppercase font-bold  bg-blue-200 hover:bg-purple-500  hover:opacity-75">
                    <button>Login</button>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
