/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HomeAllFoods = ({ food }) => {
  const {
    _id,
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
      
      
        <div
          className="relative h-full  flex md:my-5 my-2 flex-col  md:mx-2  md:h-[450px]   mx-2  text-gray-700
             bg-white shadow-md   rounded-lg bg-clip-border"
        >
          <div className="relative mx-4 mt-4  text-gray-700 bg-white shadow-lg lg:h-60 rounded-xl bg-clip-border ">
            <img src={foodImage} alt="profile-picture" />
          </div>
          <div className="p-6 ">
            <h4 className="block mb-2 font-sans md:text-xl lg:text-2xl  antialiased  font-semibold  leading-snug tracking-normal text-blue-gray-900">
              {foodName}
            </h4>
            <div className="flex gap-3 items-center">
                <img className="max-w-[30px]" src={donatorImage} alt="" />
                
            <h3 className="md:pt-2 text-lg">{donatorName}</h3>
            </div>
            <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
              Food for: {foodQuantity} persons
            </p>
            <h3>{pickupLocation} </h3>
            <h3>Expires in: {expiredDate}</h3>
            <p className="text-lg ">{additionalNotes}</p>
            <Link to={`/singleFood/${_id}`} className="flex w-full  justify-center">
            <button className=" w-fit px-3 py-2 bg-blue-100 hover:bg-purple-400 hover:text-white rounded-lg my-5 " >View Details</button>
            </Link>
            
          </div>
         
         
        </div>{" "}
      
  
      
    </div> 
  );
};

export default HomeAllFoods;
