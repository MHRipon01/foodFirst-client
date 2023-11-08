import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import AllFood from "../Pages/AllFood/AllFood";
import SingleFoodDetails from "../Pages/SingleFoodDetails/SingleFoodDetails";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import PrivateRoute from "./PrivateRoute";
import ReactTable from "../components/ReactTable/ReactTable";
import ManageSingleFood from "../Pages/ManageSingleFood/ManageSingleFood";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allFoods",
        element: <AllFood></AllFood>,
      },
      {
        path: '/singleFood/:id',
        element:<PrivateRoute><SingleFoodDetails></SingleFoodDetails>  </PrivateRoute> 
      },
      {
        path: '/addFood',
        element: <AddFood></AddFood>
      }
    ,  {
        path: '/manageFood',
        element: <PrivateRoute> <ManageMyFoods></ManageMyFoods></PrivateRoute> 
      },
      {
        path: '/manage/:id',
        element: <ManageSingleFood></ManageSingleFood>
        ,loader: ({params}) => fetch(`http://localhost:5000/updateFood/${params.id}`)
      },
      {
        path: '/updateFood/:id',
        element: <UpdateFood></UpdateFood>,
        loader: ({params}) => fetch(`http://localhost:5000/updateFood/${params.id}`)
      },
      {
        path: '/myRequest',
        element: <PrivateRoute> <MyFoodRequest></MyFoodRequest></PrivateRoute> ,
        // loader: ({params})=> fetch(`http://localhost:5000/requestedFood/${params.email}`)
      }
      ,
      {path: '/table',
      element: <ReactTable></ReactTable>,
      

      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },

  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default routes;
