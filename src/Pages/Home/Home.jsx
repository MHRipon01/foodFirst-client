// import { useContext } from "react";
import Banner from "../../components/Banner";
import Highlights from "./Highlights";
import Qoute from "./Qoute";
// import { AuthContext } from "../../Firebase/AuthProvider";

const Home = () => {
  // const {user} = useContext(AuthContext)
  // console.log(user);
  return (
    <div>
      <Banner></Banner>
      <Highlights></Highlights>
      <h3 className="text-8xl">This will be data section </h3>
      <Qoute></Qoute>
    </div>
  );
};

export default Home;
