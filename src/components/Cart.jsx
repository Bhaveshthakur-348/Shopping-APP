import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem } from "../utils/addSlice";

const Cart = () => {
  const selecteddata = useSelector(addItem);
  const cartSelectedProduct = selecteddata.payload.add.items;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const removeCartItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="text-center m-4 p-4">
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
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
            <button onClick={() => removeCartItem(item.id)} className="">
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
