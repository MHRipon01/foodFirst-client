import { Link } from "react-router-dom";

const HomeAllFoods = ({ food }) => {
  const {
    
    foodImage,
    foodName,
    donatorImage,
    donatorName,
    foodQuantity,
    pickupLocation,
    expiredDate,
    additionalNotes,
  } = food;
  
  return (
    <div>
      
       <Link 
    //    to={`/productDetails/${_id}`}
       >
        <div
          className="relative  flex md:my-5 my-2 flex-col  md:mx-2  md:h-[450px] h-[320px]  mx-2  text-gray-700
             bg-white shadow-md   rounded-lg bg-clip-border"
        >
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border ">
            <img src={foodImage} alt="profile-picture" />
          </div>
          <div className="p-6 ">
            <h4 className="block mb-2 font-sans md:text-xl  antialiased text-xs font-semibold  leading-snug tracking-normal text-blue-gray-900">
              {foodName}
            </h4>
            <h3 className="md:pt-2">⭐{donatorName}</h3>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
              $ {foodQuantity}
            </p>
          </div>
          <div className="flex justify-center pt-2 gap-7">
            <a
              href="#facebook"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="#twitter"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="#instagram"
              className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
            >
            </a>
          </div>
        </div>{" "}
      
      </Link> 
      
      
    </div> 
  );
};

export default HomeAllFoods;
