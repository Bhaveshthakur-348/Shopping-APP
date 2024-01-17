import { useDispatch } from "react-redux";
import { addItem } from "../utils/addSlice";
import { Link } from "react-router-dom";

const CardList = ({ product }) => {
  const { id, title, price, rating, thumbnail } = product;

  // const dispatch = useDispatch();

  // const handleAdd = (item) => {
  //   dispatch(addItem(item));
  // };

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
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-800">${price}</p>
        <div className="flex items-center justify-center mt-2">
          <span className="text-gray-600 ml-1">{rating}</span>
          <span className="text-yellow-500">&#9733;</span>
        </div>
        <Link to={"/product/" + id}>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardList;
