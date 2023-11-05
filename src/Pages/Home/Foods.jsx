import axios from "axios";
import useAxios from "../../hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";
import HomeAllFoods from "./HomeAllFoods";
import Loading from "../../components/Loading/Loading";

const Foods = () => {
  const axios = useAxios();

  const getFoods = async () => {
    const res = await axios.get("/foods");
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
    </div>
  );
};

export default Foods;
