import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/addSlice";
import { Product_API } from "../utils/constants";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    try {
      const response = await fetch(Product_API + id);
      const jsonData = await response.json();
      setData(jsonData);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex flex-col md:flex-row justify-around p-4">
      {loading ? (
        <div className="w-full md:w-1/3 mb-4 md:mb-0 animate-pulse bg-gray-300 h-64"></div>
      ) : (
        <>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <Carousel images={data.images} />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold mb-2">{data.title}</h2>
            <p className="text-gray-600 mb-4">{data.description}</p>
            <div className="flex items-center mb-4">
              <p className="text-lg text-red-500 font-semibold mr-2">
                {data.discountPercentage > 0 && (
                  <>
                    <span className="line-through">${data.price}</span> $
                    {(
                      data.price -
                      (data.price * data.discountPercentage) / 100
                    ).toFixed(2)}
                  </>
                )}
                {!data.discountPercentage && `$${data.price}`}
              </p>
              {data.discountPercentage > 0 && (
                <span className="text-gray-500">
                  {data.discountPercentage}% off
                </span>
              )}
            </div>
            <div className="flex items-center mb-2">
              <span className="text-gray-700">Rating:</span>
              <div className="ml-2 flex items-center">
                <span className="text-lg text-yellow-500 font-semibold">
                  {data.rating}
                </span>
                <span className="ml-1 text-gray-500">(1234)</span>
              </div>
            </div>
            <p className="text-green-500 font-semibold mb-2">
              In Stock: {data.stock} units
            </p>
            <p className="text-gray-700 mb-2">Brand: {data.brand}</p>
            <p className="text-gray-700">Category: {data.category}</p>
            <button
              onClick={() => handleAdd(data)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Add to Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
