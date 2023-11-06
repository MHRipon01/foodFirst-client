import { Helmet } from "react-helmet-async";
import ReactTable from "../../components/ReactTable/ReactTable";

 

const ManageMyFoods = () => {
    return (
        <div>
            <Helmet>
        <title>FoodFirst | Manage Foods </title>
      </Helmet>
            this will be manage foods
            <ReactTable></ReactTable>
        </div>
    );
};

export default ManageMyFoods;