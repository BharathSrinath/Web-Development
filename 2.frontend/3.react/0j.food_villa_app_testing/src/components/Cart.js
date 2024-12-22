import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => {
    return state.cart.items;
  });

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // We are subscribing to the entire slice here. If item goes through any change, cart will re-render. We are subscribing only to the items. So only when an items changes or when we add/delete/reset, our car component will re-render.
  return (
    <>
      <button
        className="bg-green-100 m-2 p-2"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => {
          return <FoodItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};
export default Cart;
