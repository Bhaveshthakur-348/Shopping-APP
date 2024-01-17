import { useSelector } from "react-redux";
import { addItem } from "../utils/addSlice";

const Cart = () => {
  const selecteddata = useSelector(addItem);
  const cartSelectedProduct = selecteddata.payload.add.items;

  return (
    <div className="text-center m-4 p-4">
      <div className="w-full md:w-6/12 lg:w-4/12 m-auto">
        {cartSelectedProduct.map((item) => (
          <div
            key={item.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex flex-col md:flex-row"
          >
            <div className="md:w-9/12">
              <div className="py-2">
                <span>{item.title}</span>
                <span> - ${item.price}</span>
              </div>
              <p className="text-xs">{item.description}</p>
            </div>
            <div className="md:w-3/12 p-4">
              <img src={item.thumbnail} className="w-full" alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
