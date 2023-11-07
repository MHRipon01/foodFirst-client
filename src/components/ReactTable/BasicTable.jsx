// import axios from "axios";
// import { useContext, useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../Firebase/AuthProvider";

// export const COLUMNS = [
//   {
//     Header: "Food Name",
//     accessor: "foodName",
//   },
//   {
//     Header: "ID", // This is your ID field
//     accessor: "id",
//   },
//   {
//     Header: "Food Image",
//     accessor: "foodImage",
//     // eslint-disable-next-line react/prop-types
//     Cell: ({ cell: { value } }) => (
//       <img
//         src={value}
//         alt="Food"
//         width="50"
//         height="50"
//         className="rounded-md"
//       />
//     ),
//   },
//   {
//     Header: "Food Quantity",
//     accessor: "foodQuantity",
//   },
//   {
//     Header: "Pickup Location",
//     accessor: "pickupLocation",
//   },
//   {
//     Header: "Expired Date",
//     accessor: "expiredDate",
//   },
//   {
//     Header: "Additional Notes",
//     accessor: "additionalNotes",
//   },
//   {
//     Header: "Donator Image",
//     accessor: "donatorImage",
//     // eslint-disable-next-line react/prop-types
//     Cell: ({ cell: { value } }) => (
//       <img
//         src={value}
//         alt="Food"
//         width="50"
//         height="50"
//         className="rounded-md"
//       />
//     ),
//   },
//   // {
//   //     Header: 'Food Status',
//   //     accessor: 'foodStatus',
//   //     // eslint-disable-next-line react/prop-types
//   //     Cell: ({ cell: { value } }) => {
//   //         const cellStyle = {
//   //             padding: '8px', // Adjust padding as needed
//   //             borderRadius: '4px', // Add some border-radius for a rounded look
//   //             color: 'white', // Text color
//   //             textAlign: 'center', // Center the text
//   //             backgroundColor: value === 'available' ? 'green' : 'red',
//   //         };

//   //         return (
//   //             <div style={cellStyle}>
//   //                 {value}
//   //             </div>
//   //         );
//   //     }
//   // },
//   {
//     Header: "Action",
//     accessor: "action",
//     // eslint-disable-next-line react/prop-types, no-unused-vars
//     Cell: ({ cell: { row } }) => {
//       const navigate = useNavigate();
//       const [data, setData] = useState([])
//       const [addedFood , setAddedFood] = useState([])
        
//   const {user} = useContext(AuthContext);
//   const email = user?.email
  

//       const handleEdit = () => {
//         // Navigate to the '/login' route
//         // alert('chck')
//         const foodId = row.original._id;
//         navigate(`/updateFood/${foodId}`)
        
//       };
     
//       const handleDelete = () => {
//         const food = row.original;
//         const foodId = row.original._id;

//         Swal.fire({
//           title: "Are you sure?",
//           text: "You won't be able to revert this!",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonColor: "#3085d6",
//           cancelButtonColor: "#d33",
//           confirmButtonText: "Yes, delete it!",
//         }).then((result) => {
//           if (result.isConfirmed) {
//             fetch(`http://localhost:5000/deleteFood/${foodId}`, {
//               method: "DELETE",
//             })
//               .then((res) => res.json())
//               .then((response) => {
//                 if (response.deletedCount > 0) {
//                   Swal.fire(
//                     "Deleted!",
//                     "Product has been deleted from the cart.",
//                     "success"
//                   );

//                   // Update the state to remove the deleted item
//                   const remainingFood = data.filter(
//                     (singleProduct) => singleProduct._id !== food._id
//                   );
//                   setData(remainingFood);
//                   axios.get(`http://localhost:5000/addedFood/${email}`, { withCredentials: true })
//                   .then((res) => setAddedFood(res.data))
//                   .catch((error) => {
//                     console.error("Error fetching data:", error);
//                   });
//               }
//             })
//               .catch((error) => {
//                 console.error("Error deleting:", error);
//               });
//           }
//         });
//         toast(foodId);
//       };
// const handleManage= () => {
//    const foodId = row.original._id;
//         navigate(`/manage/${foodId}`)
// }
//       return (
//         <div className="flex">
//           <button
//             className="bg-blue-600 px-2 py-1 rounded-md mr-2 font-semibold text-white"
//             onClick={handleEdit}
//           >
//             Edit
//           </button>
//           <button
//             className="bg-red-600 px-2 py-1 rounded-md mr-2 ml-2 font-semibold text-white"
//             onClick={() => handleDelete(row)}
//           >
//             Delete
//           </button>
//          {" "}
//           <button
//             className=" bg-emerald-600 px-2 py-1 rounded-md font-semibold text-white"
//             onClick={() => handleManage(row)}
//           >
//             Manage
//           </button>
//         </div>
//       );
//     },
//   },
// ];

// // {
// //     Header: 'Action',
// //     accessor: 'action',
// //     // eslint-disable-next-line react/prop-types
// //     Cell: ({ cell: { row } }) => (
// //         <div className="flex">
// //             <button className="bg-blue-600 px-2 py-1 rounded-md mr-2 font-semibold text-white" onClick={handleEdit}>Edit</button>
// //             <button className="bg-red-600 px-2 py-1 rounded-md mr-2 ml-2 font-semibold text-white" onClick={() => handleDelete(row)}>Delete</button>
// //             <button className=" bg-emerald-600 px-2 py-1 rounded-md font-semibold text-white" onClick={() => handleManage(row)}>Manage</button>
// //         </div>
// //     ),
// // }
