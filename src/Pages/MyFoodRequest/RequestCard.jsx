import toast from "react-hot-toast";
import Loading2 from "../../components/Loading2/Loading2";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/UseAxios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const RequestCard = ({ myFoodRequests, datas, setDatas }) => {
  console.log(myFoodRequests);
  console.log(myFoodRequests?.donationMoney);
  const { auth, user } = useContext(AuthContext);
  const email = user.email;
  // const [  setDatas ,datas] = useState(myFoodRequests);
  const {
    _id,
    donatorName,
    status,
    donationMoney,
    requestDate,
    expireDate,
    pickupLocation,
  } = myFoodRequests || {};
  // console.log(myFoodRequests?.expireDate);
  // const {isLoading} = axios
  // console.log(axios);
  // console.log(_id);
  const handleDelete = () => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://food-first-server.vercel.app/requestedFoods/${_id}`, {
          method: "DELETE",
          credentials: "include",
        })
          .then((res) => res.json())
          .then(() => {
            fetch(
              `https://food-first-server.vercel.app/requestedFood/${email}`,
              { credentials: "include" }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                setDatas(data);
                // setCancelRequest(data);
                const remainingData = datas.filter(
                  (singleData) => singleData._id === _id
                );
                setDatas(remainingData);
              });

            Swal.fire(
              "Canceled!",
              "Product has been canceled from the list.",
              "success"
            );
          });
      }
    });
  };

  // const handleDelete = () => {
  //   // toast('clicked')
  //   // toast(_id)
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axios
  //         .delete(`https://food-first-server.vercel.app/requestedFoods/${_id}`)
  //         .then(() => {
  //           // Refetch data after delete
  //           axios
  //             .get(`https://food-first-server.vercel.app/addedFood/${email}`, {
  //               withCredentials: true,
  //             })
  //             .then((res) => {
  //               setCancelRequest(res.data);
  //             });
  //         })
  //         .catch((error) => {
  //           console.error("Error deleting:", error);
  //         });
  //     }
  //   });
  // };
  // const axios = useAxios();

  // const { data: foods } = useQuery({
  //   queryKey: ["food"],
  //   queryFn: async () => {
  //     const email = auth.currentUser.email;
  //     const res = await axios.get(`/requestedFood/${email}`);
  //     console.log(res);
  //     return res;
  //   },
  // });

  return (
    <div className="w-full">
      <div className="lg:grid-cols-3 flex-col w-full border-2 border-blue-700 flex">
        <div className="flex justify-center ">
          <div className="relative grid h-[40rem] w-full max-w-[28rem] border-2 border-green-800 items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
              <div className="absolute inset-0 w-full h-full "></div>
            </div>
            <div className="relative p-6 px-6 my-auto  md:px-12">
              <h2 className="mb-6 block font-sans text-4xl font-medium  tracking-normal antialiased">
                {donatorName}
              </h2>
              <h2 className="mb-6 block font-sans text-4xl font-medium  tracking-normal antialiased">
                {pickupLocation}
              </h2>
              <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                Expired Date:{expireDate}
              </h5>
              {/* <img
            alt="tania andrew"
            src={requesterImg}
            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
          /> */}
              <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                Requested On: {requestDate}
              </h5>
              <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                My Donation: {donationMoney}
              </h5>
              <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                {status}
              </h5>
              {status == "Delivered" ? (
                <button className="blocked"></button>
              ) : (
                <button
                  onClick={handleDelete}
                  className="px-3 py-2 bg-blue-200 font-bold rounded-md "
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
