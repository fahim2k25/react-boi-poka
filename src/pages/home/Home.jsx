import { useLoaderData } from "react-router";
import Banner from "../../components/banner/Banner";
import Books from "../books/Books";

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;