import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import RequestCard from "./RequestCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";

const MyFoodRequest = () => {
  // const myFoodRequests = useLoaderData();
  // console.log(myFoodRequests);


const {user} = useContext(AuthContext)

  const [datas, setDatas] = useState();
  const [cancelRequest, setCancelRequest] = useState();

  useEffect(() => {
   fetch(`http://localhost:5000/requestedFood/${user?.email}`)
   .then(res => res.json())
   .then(data => setDatas(data))
  },[user])
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5 rounded-lg">
      <Helmet>
        <title>Food First | My Food Request</title>
      </Helmet> 
      {datas?.map((request) => (
        <RequestCard
          key={request._id}
          myFoodRequests={request}
          cancelRequest={cancelRequest}
          setCancelRequest={setCancelRequest}
          setDatas={setDatas}
          
          datas={datas}
        ></RequestCard>
      ))}
    </div>
  );
};

export default MyFoodRequest;
