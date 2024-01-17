import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../utils/addSlice";

const CardList = ({ product }) => {
  const { id, title, price, rating, thumbnail } = product;

  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substring(0, maxLength - 3) + "..."
      : title;
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white border rounded shadow-md transition duration-300 hover:shadow-lg">
      <Link to={"/product/" + id}>
        <img
          className="h-48 w-44 object-cover mb-4"
          src={thumbnail}
          alt={title}
        />
      </Link>

      <div className="text-center">
        <h2 className="sm:text-md  md:text-lg font-semibold">
          {truncateTitle(title, 25)}
        </h2>
        <p className="text-gray-800">${price}</p>
        <div className="flex items-center justify-center mt-2">
          <span className="text-gray-600 ml-1">{rating}</span>
          <span className="text-yellow-500">&#9733;</span>
        </div>
        <button
          onClick={() => handleAdd(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-2"
        >
          Add to Cart
        </button>
        <Link to={"/product/" + id}>
          <button
            onClick={scrollToTop}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardList;
