import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/UseAxios";
import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import Loading2 from "../../components/Loading2/Loading2";

const SingleFoodDetails = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.displayName);
  const axios = useAxios();
  const { id } = useParams();
  const [showModal, setShowModal] = React.useState(false);
  const getFoods = async () => {
    const res = await axios.get(`/singleFood/${id}`);
    // console.log(res);
    return res;
  };

  const [currentDate, setCurrentDate] = useState("");

  // Step 3: Use the useEffect hook to update the current date
  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString(); // Get the current date
    setCurrentDate(formattedDate);
  }, []); // Runs once on component mount

  const {
    data: singleFood,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["singleFoods"],
    queryFn: getFoods,
  });
  // console.log(singleFood);
  if (isLoading) {
    return  <Loading2></Loading2>
  }
  if (isError) {
    return <p>Something went wrong: {error}</p>;
  }
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
  } = singleFood.data;

  const handleRequest = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const donationMoney = form.get("donationMoney");
    const notes = form.get("notes");

    const formData = {
      foodName: foodName,
      foodImage: foodImage,
      foodId: _id,
      // foodDonatorEmail: user.email,
      // foodDonatorName:foodDonatorName,
      UserEmail: user.email,
      requestDate: currentDate,
      pickupLocation: pickupLocation,
      expireDate: expiredDate,
      additionalNotes: notes,
      requestedBy: user.email,
      donationMoney: donationMoney,
    };
    console.log(formData);

    //data sending to server
    fetch("http://localhost:5000/request", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
        
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Okay",
  
          })     
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>FoodFirst | Food Details </title>
      </Helmet>
      <div
        className="relative h-full justify-center  flex md:my-5 my-2 flex-col  md:mx-2  md:h-[450px]   mx-2  text-gray-700
             bg-white shadow-md   rounded-lg bg-clip-border"
      >
        <div className="relative mx-4 mt-4 flex justify-center  text-gray-700 bg-white shadow-lg lg:h-60 max-w-full rounded-xl bg-clip-border ">
          <img src={foodImage} alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans md:text-xl lg:text-2xl  antialiased  font-semibold  leading-snug tracking-normal text-blue-gray-900">
            {foodName}
          </h4>
          <div className="flex gap-3 justify-center items-center">
            <img className="max-w-[30px]" src={donatorImage} alt="" />

            <h3 className="md:pt-2 text-lg">{donatorName}</h3>
          </div>
          <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
            Food for: {foodQuantity} persons
          </p>
          <h3>{pickupLocation} </h3>
          <h3>Expires in: {expiredDate}</h3>
          {/* <p className="text-lg ">{additionalNotes}</p> */}
          <button className="flex w-full  justify-center">
            <button
              onClick={() => setShowModal(true)}
              className=" w-fit px-3 py-2 bg-blue-100 hover:bg-purple-400 hover:text-white rounded-lg my-5 "
            >
              Request
            </button>
          </button>
        </div>
      </div>{" "}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{foodName}</h3>
                  <img className="max-w-[10vw]" src={foodImage} alt="" />
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={handleRequest}>
                  <div className="pl-4">
                    <div className="relative ">
                      {/* <img src={foodImage} alt="" /> */}
                      <div className="flex flex-col gap-4 ">
                        <div className="relative w-full min-w-[200px]">
                          <label>Food Name:</label>{" "}
                          <input
                            className="border-black px-1 border-2 rounded "
                            name="foodName"
                            disabled
                            defaultValue={foodName}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 ">
                        <div className="relative py-1 w-full min-w-[200px]">
                          <label>Food Id:</label>{" "}
                          <input
                            className="border-black px-1 border-2 rounded "
                            name="id"
                            defaultValue={_id}
                            disabled
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 ">
                        <div className="relative py-1 w-full min-w-[200px]">
                          <label>Donator email:</label>{" "}
                          <input
                            className="border-black px-1 border-2 rounded "
                            name="donatorEmail"
                            disabled
                            defaultValue={user.email}
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 ">
                        <div className="relative py-1 w-full min-w-[200px]">
                          <label>Donator Name:</label>{" "}
                          <input
                            className="border-black px-1 border-2 rounded "
                            name="donatorName"
                            disabled
                            defaultValue={user.displayName}
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 ">
                        <div className="relative py-1 w-full min-w-[200px]">
                          <label>User Email:</label>{" "}
                          <input
                            className="border-black px-1 border-2 rounded "
                            name="userEmail"
                            disabled
                            defaultValue={user.email}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 ">
                        <div className="relative py-1 w-full min-w-[200px]">
                          <label>request date:</label>{" "}
                          <input
                            className="border-black px-1 border-2 rounded "
                            name="time"
                            disabled
                            defaultValue={currentDate}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 ">
                        <div className="relative py-1 w-full min-w-[200px]">
                          <label>Pickup Location:</label>{" "}
                          <input
                            className="border-black px-1 border-2 rounded "
                            name="location"
                            disabled
                            defaultValue={pickupLocation}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 ">
                        <div className="relative py-1 w-full min-w-[200px]">
                          <label>Expire Date :</label>{" "}
                          <input
                            className="border-black px-1 border-2 rounded "
                            name="expiryDate"
                            disabled
                            defaultValue={expiredDate}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 ">
                        <div className="relative py-1 w-full min-w-[200px]">
                          <label>Additional notes:</label>{" "}
                          <input
                            className="border-black px-1 border-2 rounded "
                            name="notes"
                            defaultValue={additionalNotes}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 ">
                        <div className="relative py-1 w-full min-w-[200px]">
                          <label>Donation Money:</label>{" "}
                          <input
                            className="border-black px-1 border-2 rounded "
                            name="donationMoney"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  
                    <button type="submit"
                     
                      className="bg-emerald-500  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                     
                      
                    >
                      Request
                    </button>
                    <button className="bg-emerald-500  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"  onClick={() => setShowModal(false)}>
                      Close
                    </button>
                   
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default SingleFoodDetails;
