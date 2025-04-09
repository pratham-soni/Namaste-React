import { useSelector } from "react-redux";
import RestaurentItem from "./RestaurentItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-7/12 m-auto">
        <div className="flex flex-col">
          {cartItems.map((cartItem) => (
            <RestaurentItem key={cartItem.info.id} resItem={cartItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
