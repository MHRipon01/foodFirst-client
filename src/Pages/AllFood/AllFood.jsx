import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/UseAxios";

import HomeAllFoods from "../Home/HomeAllFoods";
import Navbar from "../../components/Navbar/Navbar";
import Loading2 from "../../components/Loading2/Loading2";
import { Input } from "postcss";
import { useState } from "react";

const AllFood = () => {
  const axios = useAxios();
  const [date, setDate] = useState("");
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState("");

  console.log(search);
  console.log(date);
  const getFoods = async () => {
    const res = await axios.get(
      `/foods?sortField=expiredDate&sortOrder=${date}&foodName=${check}`
    );
    // console.log(res);
    return res;
  };

  const {
    data: foods,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["foods", date, check],
    queryFn: getFoods,
  });

  if (isLoading) {
    return <Loading2> </Loading2>;
  }
  if (isError) {
    return <p>Something went wrong: {error}</p>;
  }

  return (
    <div>
      {/* <input type="text" onClick={e => setSearch(e.target.value)} name="" id="" /> */}

      <div className="md:flex w-full  justify-between">
        <div className="items-center my-4 flex justify-center ml-16   md:w-1/2">
          <div className="flex rounded-md  overflow-hidden w-full">
            <input
              onChange={(event) => setSearch(event.target.value)}
              type="text"
              placeholder="Search here..."
              className="md:w-[300px]  px-3  border-2 border-[#DEDEDE] rounded-md  rounded-r-none"
            />
            <button
              type="button"
              onClick={() => setCheck(search)}
              className="bg-[#FF444A]
           text-white px-6 text-lg font-semibold py-4 rounded-r-md"
            >
              Go
            </button>
          </div>
        </div>
        <div className="w-1/2 mx-auto flex justify-center">
          <select
            name=""
            className="input my-6"
            onChange={(e) => setDate(e.target.value)}
            id=""
          >
            <option value="" className="disabled">
              Choose one
            </option>
            <option value="asc">From less time to much time</option>
            <option value="desc">From much time to less time</option>
          </select>
        </div>
      </div>
<div className="my-6">

   <div className="grid md:grid-cols-3  gap-3 lg:grid-cols-3 h-full ">
        {foods.data.map((food, index) => (
          <HomeAllFoods key={`${food._id}-${index}`} food={food}></HomeAllFoods>
        ))}
      </div>
</div>
     
    </div>
  );
};

export default AllFood;
