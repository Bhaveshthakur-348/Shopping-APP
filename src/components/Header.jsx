import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateSearchTerm } from "../utils/searchSlice";
import shopIcon from "../assets/shopIcon.jpg";

const Header = () => {
  const cartItems = useSelector((store) => store.add.items);
  const searchTerm = useSelector((store) => store.search.searchTerm);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(updateSearchTerm(e.target.value));
  };

  return (
    <header className="grid grid-cols-3 p-4 bg-white text-black shadow-lg">
      {/* First Part - Logo, Home, and Product */}
      <div className="flex items-center">
        <a href="/">
          <img
            src={shopIcon}
            alt="Logo"
            className="h-11 w-39 mr-6 hidden sm:inline-block"
          />
        </a>
        <p className="mr-6 hover:text-gray-300">
          <Link to="/">Home</Link>
        </p>
        {/* <p className=" hover:text-gray-300">
          <Link to="/product">Product</Link>
        </p> */}
      </div>

      {/* Second Part - Search Input */}
      <div className="col-span-1 flex items-center justify-center">
        <input
          className="text-black border rounded px-2 py-1 w-full sm:w-64"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Third Part - Cart */}
      <div className="flex items-center justify-end">
        <Link to="/cart" className="flex items-center hover:text-gray-300">
          <svg
            viewBox="0 0 24 24"
            fill="black"
            className="w-6"
            cursor="pointer"
          >
            <path d="M4.012 20.718L5.246 7.314H7.27v1.763a.733.733 0 101.466 0V7.314h6.528v1.763a.733.733 0 001.466 0V7.314h2.024l1.234 13.404H4.012zM12 3.282c1.56 0 2.865 1.1 3.187 2.565H8.813A3.268 3.268 0 0112 3.282zm8.15 3.228a.733.733 0 00-.73-.663h-2.747A4.734 4.734 0 0012 1.816a4.734 4.734 0 00-4.673 4.03H4.58a.733.733 0 00-.73.664L2.475 21.38a.734.734 0 00.73.804h17.59a.733.733 0 00.73-.803L20.15 6.51z"></path>
          </svg>
          <span className="bg-blue-500 text-white rounded-full p-1 h-6 w-6 flex items-center justify-center -mt-3 -ml-2">
            {cartItems.length}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
