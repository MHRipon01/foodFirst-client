import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../Firebase/AuthProvider";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const FoodImage = form.FoodImage.value;
    const quantity = form.quantity.value;
    const location = form.location.value;
    const ExpiredDate = form.ExpiredDate.value;
    const notes = form.notes.value;
    const dropdown = form.dropdown.value;

    const newFood = {
      foodName: name,
      foodImage: FoodImage,
      foodQuantity: quantity,
      pickupLocation: location,
      donatorName: user?.displayName,
      donatorImage: user?.photoURL,

      expiredDate: ExpiredDate,
      additionalNotes: notes,
      availability: dropdown,
      donatorEmail: user?.email,
    };

    console.log(newFood);
    // console.log(donatorEmail);

    //data sending to server
    fetch("https://food-first-server.vercel.app/addFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>FoodFirst | Add Food </title>
      </Helmet>
      <div className="  p-24">
        <h2 className="text-3xl font-extrabold">Add Food</h2>

        <form onSubmit={handleAddProduct}>
          {/* form row name & quantity */}
          <div className="md:flex ">
            <div className="form-control md:w-1/2  w-full">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Food Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2  md:ml-5 w-full ">
              <label className="label">
                <span className="label-text">Food Image url</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="FoodImage"
                  placeholder="Food Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row supplier  */}

          <div className="md:flex ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Food Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2  md:ml-5">
              <label className="label">
                <span className="label-text">Pickup Location </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="location"
                  placeholder="Pickup Location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row category & details */}
          <div className="md:flex ">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Expired Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="ExpiredDate"
                  placeholder="Expired Date "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-5">
              <label className="label">
                <span className="label-text">Additional Notes </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="notes"
                  placeholder="Additional Notes  "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form Photo url  */}

          <div className=" mb-8 mt-7 ">
            <div className="relative inline-flex">
              {/* <svg
                className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 9.822c-9.763-9.763-25.592-9.763-35.355 0C2.56 14.69 0 20.952 0 27.213v177.571c0 6.262 2.56 12.524 7.323 17.284l163.358 163.15c9.763 9.679 25.475 9.679 35.238 0l163.354-163.15c4.764-4.76 7.324-11.022 7.324-17.284V27.213c0-6.262-2.56-12.524-7.323-17.391L206 171.144z"
                  fill="#648299"
                  stroke="#648299"
                ></path>
              </svg> */}

              <select
                name="dropdown"
                className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10
 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              >
                <option value="Unavailable">Unavailable</option>
                <option value="Available" selected>
                  Available
                </option>
              </select>
            </div>
            <div className="w-full mt-5 text-center  flex justify-center ">
              <div className=" flex gap-3">
                {" "}
                <div className="max-w-[40px]">
                  <img src={user?.photoURL} alt="" />
                </div>
                <div className="justify-center flex">
                  <h2>{user?.displayName}</h2>{" "}
                </div>
              </div>
            </div>
            <h2 className="flex justify-center">{user?.email}</h2>
          </div>
          <div className="w-full flex justify-center">
            <input
              type="submit"
              value="Add Food"
              className=" bg-blue-300 px-3 py-2 rounded font-semibold w-fit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
