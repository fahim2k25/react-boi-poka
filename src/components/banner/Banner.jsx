import bookBanner from "./../../assets/books.jpg"
const Banner = () => {
    return (
        <div className="flex justify-between m-5 p-7">
            <div>
                <h1 className="text-6xl font-semibold font-mono mb-5">boI pokA amrA</h1>
                <button className="btn btn-accent">View List</button>
            </div>
            <div>
                <img className="w-60 h-52" src={bookBanner} />
            </div>
        </div>
    );
};

export default Banner;