import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ManageSingleFood = () => {
  const { foodName, _id } = useLoaderData();
  const [manageFood, setManageFood] = useState(null);

  useEffect(() => {
    if (_id) {
      fetch(`http://localhost:5000/manage/${_id}`)
        .then((res) => res.json())
        .then((data) => setManageFood(data))
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [_id]);

  const {requestDate , requesterName ,requesterImg, } = manageFood || {}
//   console.log(requestDate);
  console.log(manageFood);
  if (!manageFood) {
    return <p>Loading...</p>;
  }
  
  if (!manageFood.requestedBy) {
    return <h3>No one requested this food yet!</h3>;
  }

  return (
    <div>
      Manage single food for: {foodName}
      {/* Your other content */}

      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
  <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
    <img
      src={requesterImg}
      alt="tania andrew"
      className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
    />
    <div className="flex w-full flex-col gap-0.5">
      <div className="flex items-center justify-between">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {requesterName}
        </h5>
        <div className="flex items-center px-3 py-2 bg-blue-200 gap-0 5">
        <button>Delivered</button>
           
         
         
        </div>
      </div>
      <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
        Frontend Lead @ Google
      </p>
    </div>
  </div>
  <div className="p-0 mb-6">
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
     {manageFood.requestDate}
    </p>
  </div>
</div>









    </div>
  );
};

export default ManageSingleFood;
