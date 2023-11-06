import { Helmet } from "react-helmet-async";



const MyFoodRequest = ({params}) => {
    // const food = useLoaderData()
    // console.log(food);
    return (
        <div>
            <Helmet>
                <title>Food First | My Food Request</title>
            </Helmet>
            this is my food request page.
        </div>
    );
};

export default MyFoodRequest;