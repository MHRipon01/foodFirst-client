// import { useContext } from "react";
import Banner from "../../components/Banner";
import Foods from "./Foods";
import Highlights from "./Highlights";
import Qoute from "./Qoute";
// import { AuthContext } from "../../Firebase/AuthProvider";

const Home = () => {
  // const {user} = useContext(AuthContext)
  // console.log(user);
  return (
    <div>
      <Banner></Banner>
     
      <div className="w-full  justify-center  grid">
         <Highlights></Highlights>
      </div>
      <Foods></Foods>
      <Qoute></Qoute>
    </div>
  );
};

export default Home;
