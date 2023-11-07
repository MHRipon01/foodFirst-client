import { useLoaderData } from "react-router-dom";

 
const ManageSingleFood = () => {
    
    const {foodName} = useLoaderData()
    console.log(foodName);
    
    return (
        <div>

            manage single food for the single
        </div>
    );
};

export default ManageSingleFood;