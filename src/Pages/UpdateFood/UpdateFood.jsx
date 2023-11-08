import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const food = useLoaderData();
  console.log(food);

  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    //donatorName,
    // donatorImage,
    expiredDate,
    additionalNotes,
    // availability,
    // donatorEmail,
  } = food;

  const handleUpdateFood = (event) => {
    event.preventDefault();

    const form = event.target;

    const foodName = form.name.value;
    const foodQuantity = form.foodQuantity.value;
    const foodImage = form.foodImage.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    // const details = form.details.value;
    const additionalNotes = form.additionalNotes.value;

    const updatedFood = {
      foodName,
      foodQuantity,
      additionalNotes,
      pickupLocation,
      // details,
      expiredDate,
      foodImage,
    };

    console.log(updatedFood);

    //send data to the server

    fetch(`https://food-first-server.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json ",
      },
      body: JSON.stringify(updatedFood),
    })
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
  };

  return (
    <div>
      <div className="  p-24">
        <h2 className="text-3xl font-extrabold">Update: {foodName}</h2>

        <form onSubmit={handleUpdateFood}>
          {/* */}
          <div className="md:flex ">
            <div className="form-control md:w-1/2  w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={foodName}
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2  md:ml-5 w-full ">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="additionalNotes"
                  defaultValue={additionalNotes}
                  placeholder="Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/*   */}

          <div className="md:flex ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="foodQuantity"
                  defaultValue={foodQuantity}
                  placeholder="foodQuantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 md:ml-5">
              <label className="label">
                <span className="label-text">Pickup Location</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="pickupLocation"
                  defaultValue={pickupLocation}
                  placeholder="pickupLocation "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/*  */}
          <div className="md:flex "></div>

          <div className="form-control md:w-full ">
            <label className="label">
              <span className="label-text">FoodImage URL </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="foodImage"
                defaultValue={foodImage}
                placeholder="foodImage URL "
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className=" mb-8 mt-7 ">
            <div className="relative inline-flex">
              <div className="form-control md:w-full ">
                <label className="label">
                  <span className="label-text">expired Date </span>
                </label>
                <label className="input-group">
                  <input
                    type="date"
                    name="expiredDate"
                    defaultValue={expiredDate}
                    placeholder="expiredDate "
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <input
              type="submit"
              value="Update Food"
              className=" bg-blue-300 px-3 py-2 rounded font-semibold w-fit"
            />{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
