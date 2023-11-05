import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/UseAxios";
import Loading from "../../components/Loading/Loading";
import HomeAllFoods from "../Home/HomeAllFoods";
import Navbar from "../../components/Navbar/Navbar";








const AllFood = () => {
    const axios = useAxios();


const getFoods = async () => {
  const res = await axios.get("/foods?sortField=foodQuantity&sortOrder=desc");
  // console.log(res);
  return res;
};

const {
  data: foods,
  isLoading,
  isError,
  error,
} = useQuery({
  queryKey: ["foods"],
  queryFn: getFoods,
});

if (isLoading) {
  return <Loading></Loading>
}
if (isError) {
  return <p>Something went wrong: {error}</p>;
}

return (

        <div>
            
          <div className="grid md:grid-cols-3 gap-5 lg:grid-cols-3 h-full ">
        {foods.data.map((food) => (
          <HomeAllFoods key={food._id} food={food}></HomeAllFoods>
        ))}
</div>
        </div>
    );
};

export default AllFood;