import { useDispatch, useSelector } from "react-redux";
import RestaurentItem from "./RestaurentItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // make sure u are subscribing to the right portion of the store
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handelClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 w-7/12 mx-auto">
      <h1 className="text-2xl font-bold text-center p-1">Cart</h1>
      <div className="m-2 p-2 text-center">
        <button
          className=" bg-gray-400 text-white rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:text-gray-700 hover:font-bold"
          onClick={handelClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-full">
        <div className="flex flex-col">
          {cartItems.map((cartItem) => (
            <RestaurentItem key={cartItem.info.id} resItem={cartItem} />
          ))}
          {cartItems.length === 0 && (
            <h2 className="text-center font-bold text-2xl ">
              Cart is empty! add items to the cart
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
