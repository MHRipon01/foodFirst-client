import { useNavigate } from "react-router-dom";

export const COLUMNS = [
  {
    Header: "Food Name",
    accessor: "foodName",
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

      const handleEdit = () => {
        // Navigate to the '/login' route
        navigate("/login");
      };
      const handleDelete = () =>{
        navigate('/register')
      }
const handleManage= () => {
    navigate('/manageSingle')
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
