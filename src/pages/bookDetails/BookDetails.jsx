import { useLoaderData, useParams } from "react-router";
import { addToStorageDB } from "../../utility/addToDb"

const BookDetails = () => {
    let params = useParams();
    const paramsID = params.bookID;
    const newData = useLoaderData();
    const singleBook = newData.find(elem => elem.bookId == paramsID);
    const { bookName, image, rating, category, tags, yearOfPublishing, publisher, review, author, totalPages } = singleBook;

    const handleMarkRead = (paramsID) => {
        addToStorageDB(paramsID);
    }

    return (
        <div className="flex justify-between mb-5">
            <div className="bg-gray-200 w-1/2 flex flex-col items-center justify-center p-2.5">
                <img className="w-2/3 h-2/3" src={image} alt={bookName} />
            </div>
            <div className="w-1/2 p-5">
                <h1 className="text-6xl font-bold">{bookName}</h1>
                <br />
                <h3 className="text-2xl font-medium text-gray-600">By: {author}</h3>
                <div className="divider"></div>
                <h3 className="text-2xl font-medium text-gray-600">{category}</h3>
                <div className="divider"></div>
                <p>
                    <span className="font-bold">Review:</span> {review}
                </p>
                <div className="my-5">
                    <span className="font-bold mr-3">Tag:</span>
                    {tags.map((elem, index) => <div key={index} className="badge badge-primary mr-3">{elem}</div>)}
                </div>
                <div className="divider"></div>
                <div className="flex gap-5">
                    <p className="font-medium text-gray-400">Number of Pages:</p>
                    <p className="font-bold">{totalPages}</p>
                </div>
                <div className="flex gap-20">
                    <p className="font-medium text-gray-400">Publisher:</p>
                    <p className="font-bold">{publisher}</p>
                </div>
                <div className="flex gap-4">
                    <p className="font-medium text-gray-400">Year of Publishing:</p>
                    <p className="font-bold">{yearOfPublishing}</p>
                </div>
                <div className="flex gap-25">
                    <p className="font-medium text-gray-400">Rating:</p>
                    <p className="font-bold">{rating}</p>
                </div>
                <div className=" my-4 flex gap-4">
                    <button onClick={() => handleMarkRead(paramsID)} className="btn btn-outline">Mark as Read</button>
                    <button className="btn btn-soft btn-info">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;