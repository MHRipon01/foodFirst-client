// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../../Firebase/AuthProvider";

// const ReactTable = () => {
// const {auth} = useContext(AuthContext)
//   const queryClient = useQueryClient()
//   const {data:addedFood} = useQuery({
// queryKey:['addedFood'],
// queryFn:async() => {
//   const email = auth.currentUser.email
//   // console.log(email);
//   const res = await axios.get(`https://food-first-server.vercel.app/addedFood/${email}`)
//   // console.log(res.data);
//   return res
// }
//   })

//   return (
//     <div>

//     </div>
//   );
// };

// export default ReactTable;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useMemo } from "react";
import { useTable } from "react-table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
const ReactTable = () => {
  const COLUMNS = [
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
      Header: "Action",
      accessor: "action",
      Cell: ({ cell: { row } }) => {
        const navigate = useNavigate();
        const { user, auth } = useContext(AuthContext);
        const email = user?.email;
        const [data, setData] = useState([]);
        // const [addedFood , setAddedFood] = useState([])

        const handleEdit = () => {
          // Navigate to the '/login' route
          // alert('chck')
          const foodId = row.original._id;
          navigate(`/updateFood/${foodId}`);
        };

        const handleManage = () => {
          const foodId = row.original._id;
          navigate(`/manage/${foodId}`);
        };
        // const axios = useAxio
        const queryClient = useQueryClient();
        const { data: addedFood } = useQuery({
          queryKey: ["addedFood"],
          queryFn: async () => {
            const email = auth.currentUser.email;
            // console.log(email);
            const res = await axios.get(
              `https://food-first-server.vercel.app/addedFood/${email}`,
              { withCredentials: true }
            );
            // console.log(res.data);
            return res;
          },
        });

        const { mutate } = useMutation({
          mutationKey: ["addedFood"],
          mutationFn: (id) => {
            return axios.delete(
              `https://food-first-server.vercel.app/deleteFood/${id}`,
              {
                withCredentials: true,
              }
            );
          },
          onSuccess: () => {
            toast.success("deleted");
            queryClient.invalidateQueries({ queryKey: ["addedFood"] });
          },
        });

        // const handleDelete = () => {
        //   const food = row.original;
        //   const foodId = row.original._id;

        //   Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!",
        //   })

        //   .then((result) => {
        //     axios
        //     .delete(`https://food-first-server.vercel.app/deleteFood/${foodId}`)
        //     .then(() => {
        //       // Refetch data after delete
        //       axios
        //         .get(`https://food-first-server.vercel.app/addedFood/${email}`, {
        //           withCredentials: true,
        //         })
        //         .then((res) => {
        //           setAddedFood(res.data);
        //           // window.reload()
        //         });
        //     })
        //     .catch((error) => {
        //       console.error("Error deleting:", error);
        //     });
        //   });
        // };

        const handleDelete = () => {
          const food = row.original;
          const foodId = row.original._id;

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
              axios
                .delete(
                  `https://food-first-server.vercel.app/deleteFood/${foodId}`,
                  {
                    withCredentials: true,
                  }
                )
                .then(() => {
                  // Refetch data after delete
                  axios
                    .get(
                      `https://food-first-server.vercel.app/addedFood/${email}`,
                      { withCredentials: true },
                      // {
                      //   withCredentials: true,
                      // }
                    )
                    .then((res) => {
                      setAddedFood(res.data);
                    });
                })
                .catch((error) => {
                  console.error("Error deleting:", error);
                });
            }
          });
        };

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
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="bg-emerald-600 px-2 py-1 rounded-md font-semibold text-white"
              onClick={handleManage}
            >
              Manage
            </button>
          </div>
        );
      },
    },
  ];

  const { user, auth } = useContext(AuthContext);
  const email = user?.email;
  const [addedFood, setAddedFood] = useState([]);

  const queryClient = useQueryClient();

  const { data: addedFoods } = useQuery({
    queryKey: ["addedFood", email], // Updated the query key to match 'addedFood' with the email
    queryFn: async () => {
      const res = await axios.get(
        `https://food-first-server.vercel.app/addedFood?email=${email}`,
        { withCredentials: true }
      );
      console.log(res.data);
      setAddedFood(res.data);
      return res;
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["addedFood"], // Update the mutation key to match 'addedFood'
    mutationFn: (id) => {
      return axios.delete(
        `https://food-first-server.vercel.app/deleteFood/${id}`,
        {
          withCredentials: true,
        }
      );
    },
    onSuccess: () => {
      toast.success("Deleted");
      queryClient.invalidateQueries(["addedFood", email]); // Match the query key with email
    },
  });

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   axios
  //     .get(`https://food-first-server.vercel.app/addedFood/${email}`, {
  //       withCredentials: true,
  //     })
  //     .then((res) => setAddedFood(res.data))
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, [email]);

  const columns = useMemo(() => COLUMNS, []);

  const data = useMemo(() => addedFood, [addedFood]);
  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <h1 className="font-bold text-center text-4xl mt-5 mb-5">
        Manage My food
        <span className="font-semibold text-base ml-2">[React-Table]</span>
      </h1>

      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column.id} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td key={cell.id} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReactTable;
