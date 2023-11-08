import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ManageSingleFood = () => {
  const { foodName, _id } = useLoaderData();
  const [manageFood, setManageFood] = useState(null);
  console.log(_id);

  useEffect(() => {
    if (_id) {
      fetch(`https://food-first-server.vercel.app/manage/${_id}`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => setManageFood(data))
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [_id]);

  // const handleChangeStatus = () => {
  //   toast("check");
  //   toast(status)

  //   event.preventDefault();

  //   const requesterName = requesterName
  //   const requestDate =requestDate
  //   const requesterImg = requesterImg
  //   const requestedBy = requestedBy
  //   const status = 'Delivered'
  //   // const details = form.details.value;

  //   const updateRequesterInfo = {
  //     requesterName,
  //     requestDate,
  //     requesterImg,
  //     requestedBy,
  //     status
  //   };
  //   fetch(
  //     `https://food-first-server.vercel.app/update/${_id}`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json ",
  //       },
  //       body: JSON.stringify(updateRequesterInfo),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount > 0) {
  //         Swal.fire({
  //           title: "success",
  //           text: "Product updated successfully",
  //           icon: "success",
  //           confirmButtonText: "Cool",
  //         });
  //       }
  //     });
  // };

  const { requestDate, requesterName, requesterImg, requestedBy, status } =
    manageFood || {};

  console.log(manageFood);
  if (!manageFood) {
    return <p>Loading...</p>;
  }

  console.log(_id);
  if (!manageFood.requestedBy) {
    return <h3>No one requested this food yet!</h3>;
  }

  const handleChangeStatus = () => {
    // toast("check");
    console.log(_id);
    // event.preventDefault();

    // const requester_name = requesterName;
    // const request_Date = requestDate;
    // const requester_Img = requesterImg;
    // const requested_By = requestedBy;
    const status = manageFood.status;

    // const details = form.details.value;
    // toast(status);
    // toast(status);

    const updateRequesterInfo = {
      // requester_name,
      // request_Date,
      // requester_Img,
      // requested_By,
      status,
    };
    console.log(updateRequesterInfo);
    fetch(
      `https://food-first-server.vercel.app/manageStatus/${_id}`,
      { credentials: "include" },
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json ",
        },
        body: JSON.stringify(updateRequesterInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "Product updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    //main collection theke delete korbo akhane

    fetch(
      `https://food-first-server.vercel.app/deleteFood/${_id}`,
      { credentials: "include" },
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.deletedCount > 0) {

        // }
      });
  };

  return (
    <div className="flex justify-center">
      <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div className="absolute inset-0 w-full h-full "></div>
        </div>
        <div className="relative p-6 px-6 my-auto  md:px-12">
          <h2 className="mb-6 block font-sans text-4xl font-medium  tracking-normal antialiased">
            {requesterName}
          </h2>
          <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
            {requestedBy}
          </h5>
          <img
            alt="Requester name"
            src={requesterImg}
            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
          />
          <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
            {requestDate}
          </h5>
          <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
            {status}
          </h5>
          <button
            onClick={handleChangeStatus}
            className="px-3 py-2 bg-blue-200 font-bold rounded-md "
          >
            Change Status
          </button>
        </div>
      </div>
    </div>

    // <div>
    //   Manage single food for: {foodName}
    //   {/* Your other content */}
    //   <div classNameName="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
    //     <div classNameName="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
    //       <img
    //         src={requesterImg}
    //         alt="tania andrew"
    //         classNameName="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
    //       />
    //       <div classNameName="flex w-full flex-col gap-0.5">
    //         <div classNameName="flex items-center justify-between">
    //           <h5 classNameName="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    //             {requesterName}
    //           </h5>
    //           <div classNameName="flex items-center px-3 py-2 bg-blue-200 gap-0 5">
    //             <button>Delivered</button>
    //           </div>
    //         </div>
    //         <p classNameName="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
    //           {requestedBy}
    //         </p>  <div>{status}</div>
    //       </div>

    //     </div>{" "}
    //     <div>{requestDate}</div>
    //     <div classNameName="p-0 mb-6">
    //       <p classNameName="block font-sans text-base antialiased font-light leading-relaxed text-inherit"></p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ManageSingleFood;
