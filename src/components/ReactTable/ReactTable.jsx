// import { useLoaderData } from "react-router-dom";
// import BasicTable from "./BasicTable";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";

// import { useReactTable ,getCoreRowModel, flexRender} from "@tanstack/react-table";
import { useMemo } from "react";

import { useTable } from "react-table";
import{COLUMNS} from "./BasicTable"


import axios from "axios";

const ReactTable = () => {

  const {user} = useContext(AuthContext);
const email = user?.email






const [addedFood , setAddedFood] = useState([])
   useEffect(()=>{
	axios.get(`http://localhost:5000/addedFood/${email}`, {withCredentials: true})
	.then(res =>setAddedFood(res.data))
   },[email])



console.log(addedFood);
 const columns = useMemo(()=> COLUMNS,[])

 const data = useMemo(()=> addedFood,[addedFood])
 const tableInstance =  useTable({
       columns,
        data
    })

    const{getTableProps, getTableBodyProps, headerGroups,rows,prepareRow}=tableInstance

  return (
    <div>
    <h1 className="font-bold text-center text-4xl mt-5 mb-5">Manage My food 
     <span className="font-semibold text-base ml-2">[React-Table]</span>
    </h1>

    <table {...getTableProps()} className="table">
    
<thead>
  {headerGroups.map(headerGroup => (
    <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(column => (
        <th key={column.id} {...column.getHeaderProps()}>{column.render('Header')}</th>
      ))}
    </tr>
  ))}
</thead>
<tbody {...getTableBodyProps()}>
  {rows.map(row => {
    prepareRow(row);
    return (
      <tr key={row.id}  {...row.getRowProps()}>
        {row.cells.map(cell => {
          return (
            <td key={cell.id}  {...cell.getCellProps()}>{cell.render('Cell')}</td>
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










