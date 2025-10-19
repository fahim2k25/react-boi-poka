import { useLoaderData } from "react-router";

const BookDetails = () => {
    const newData = useLoaderData();

    return (
        <div>
            <p>I Am BookDetails</p>
        </div>
    );
};

export default BookDetails;