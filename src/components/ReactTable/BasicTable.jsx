import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const COLUMNS = [
  {
    Header: "Food Name",
    accessor: "foodName",
  },
  {
    Header: "ID", // This is your ID field
    accessor: "id",
  },
  {
    Header: "Food Image",
    accessor: "foodImage",
    // eslint-disable-next-line react/prop-types
    Cell: ({ cell: { value } }) => (
      <img
        src={value}
        alt="Food"
        width="50"
        height="50"
        className="rounded-md"
      />
    ),
  },
  {
    Header: "Food Quantity",
    accessor: "foodQuantity",
  },
  {
    Header: "Pickup Location",
    accessor: "pickupLocation",
  },
  {
    Header: "Expired Date",
    accessor: "expiredDate",
  },
  {
    Header: "Additional Notes",
    accessor: "additionalNotes",
  },
  {
    Header: "Donator Image",
    accessor: "donatorImage",
    // eslint-disable-next-line react/prop-types
    Cell: ({ cell: { value } }) => (
      <img
        src={value}
        alt="Food"
        width="50"
        height="50"
        className="rounded-md"
      />
    ),
  },
  // {
  //     Header: 'Food Status',
  //     accessor: 'foodStatus',
  //     // eslint-disable-next-line react/prop-types
  //     Cell: ({ cell: { value } }) => {
  //         const cellStyle = {
  //             padding: '8px', // Adjust padding as needed
  //             borderRadius: '4px', // Add some border-radius for a rounded look
  //             color: 'white', // Text color
  //             textAlign: 'center', // Center the text
  //             backgroundColor: value === 'available' ? 'green' : 'red',
  //         };

  //         return (
  //             <div style={cellStyle}>
  //                 {value}
  //             </div>
  //         );
  //     }
  // },
  {
    Header: "Action",
    accessor: "action",
    // eslint-disable-next-line react/prop-types, no-unused-vars
    Cell: ({ cell: { row } }) => {
      const navigate = useNavigate();
      

        
   const [deleteFood, setDeleteFood] = useState([]);

      const handleEdit = () => {
        // Navigate to the '/login' route
        // alert('chck')
        const foodId = row.original._id;
        navigate(`/updateFood/${foodId}`)
        
      };
      const handleDelete = () =>{
        const food = row.original;
        // navigate(`/deleteFood/${foodId}`)
const foodId = row.original._id

            // console.log(deleteFood);
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                fetch(
                  `http://localhost:5000/deleteFood/${foodId}`,
                  {
                    method: "DELETE",
                  }
                )
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    // if (data.deletedCount > 0) {
                    Swal.fire(
                      "Deleted!",
                      "Product has been deleted from the cart.",
                      "success"
                    );
                    const remainingFood = food.filter(
                      (singleProduct) => singleProduct._id != food._id
                    );
                    console.log(remainingFood);
                    setDeleteFood(remainingFood);
                  
                    
                  });
              }
            });
          
        toast(foodId)
      }

const handleManage= () => {
   const foodId = row.original._id;
        navigate(`/manageSingle/${foodId}`)
}
      return (
        <div className="flex">
          <button
            className="bg-blue-600 px-2 py-1 rounded-md mr-2 font-semibold text-white"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="bg-red-600 px-2 py-1 rounded-md mr-2 ml-2 font-semibold text-white"
            onClick={() => handleDelete(row)}
          >
            Delete
          </button>
         {" "}
          <button
            className=" bg-emerald-600 px-2 py-1 rounded-md font-semibold text-white"
            onClick={() => handleManage(row)}
          >
            Manage
          </button>
        </div>
      );
    },
  },
];

// {
//     Header: 'Action',
//     accessor: 'action',
//     // eslint-disable-next-line react/prop-types
//     Cell: ({ cell: { row } }) => (
//         <div className="flex">
//             <button className="bg-blue-600 px-2 py-1 rounded-md mr-2 font-semibold text-white" onClick={handleEdit}>Edit</button>
//             <button className="bg-red-600 px-2 py-1 rounded-md mr-2 ml-2 font-semibold text-white" onClick={() => handleDelete(row)}>Delete</button>
//             <button className=" bg-emerald-600 px-2 py-1 rounded-md font-semibold text-white" onClick={() => handleManage(row)}>Manage</button>
//         </div>
//     ),
// }
