import { useState } from "react";
import { useSelector } from "react-redux";
import { data } from "../utils/data";
import CardList from "./CardList";
import Pagination from "./Pagination";
import { selectSearchTerm } from "../utils/searchSlice";
import Carousel from "./Carousel";

const HomePage = () => {
  const images = data[0].products[0].images;

  const searchTerm = useSelector(selectSearchTerm);

  const products = data[0].products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Carousel */}
      <Carousel images={images} />

      {/* Product Grid */}
      <div className="container mx-auto p-4">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {currentItems?.map((product) => (
              <CardList key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No data available</p>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
