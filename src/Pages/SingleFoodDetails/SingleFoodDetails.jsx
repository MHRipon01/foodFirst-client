import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/UseAxios";
import { useParams } from "react-router-dom";

 

const SingleFoodDetails = () => {

    const axios = useAxios();
const {id} = useParams()

    const getFoods = async () => {
      const res = await axios.get(`/singleFood/${id}`);
      // console.log(res);
      return res;
    };
    
    const {
      data: singleFood,
      isLoading,
      isError,
      error,
    } = useQuery({
      queryKey: ["singleFoods"],
      queryFn: getFoods,
    });
    console.log(singleFood.data);
    if (isLoading) {
      return  <p>Loading...</p>;
    }
    if (isError) {
      return <p>Something went wrong: {error}</p>;
    }


    return (
        <div>


        </div>
    );
};

export default SingleFoodDetails;