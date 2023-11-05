import axios from "axios";
import useAxios from "../../hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";
import HomeAllFoods from "./HomeAllFoods";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const Foods = () => {
  const axios = useAxios();

  const getFoods = async () => {
    const res = await axios.get("/foods?sortField=foodQuantity&sortOrder=desc&limit=9");
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
      <div className="grid md:grid-cols-3 gap-5 lg:grid-cols-3  ">
        {foods.data.map((food) => (
          <HomeAllFoods key={food._id} food={food}></HomeAllFoods>
        ))}

      </div>
        <Link to='/allFoods' className="flex justify-center my-6">
        <button className="px-3  py-2 bg-gradient-to-l from-green-400 via-green-300 to-green-400 font-medium rounded-lg">Show All</button>
        </Link>
    </div>
  );
};

export default Foods;
