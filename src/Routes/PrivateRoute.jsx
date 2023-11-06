import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "../Firebase/AuthProvider";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation()
  console.log(location.pathname);



  if (loading) {
    return (
        <div className="h-[90vh] flex justify-center items-center ">
       <Loading></Loading>
       
     
       
      </div>
      
    )
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
