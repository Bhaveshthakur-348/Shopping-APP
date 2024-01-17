import { useEffect, useState } from "react";

const useProductData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    // const getJson = json.products;
    setData(json);
  };
  return data;
};

export default useProductData;
