import { IoStarHalf } from "react-icons/io5";

const Book = ({ elem }) => {
    const { bookName, image, rating, category, tags, yearOfPublishing, publisher } = elem;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img className="h-[150px]"
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p>{publisher}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">
                        {rating}<IoStarHalf />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;