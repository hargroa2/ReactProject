import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import "../App.scss";

const Cart = (): JSX.Element => {
  const cart = useAppSelector((state) => state.items);
  //   const dispatch = useAppDispatch();
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cart.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
      <button>Complete Order</button>
    </div>
  );
};

export default Cart;
