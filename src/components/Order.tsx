import React from "react";
import Cart from "./Cart";
import MenuItems from "./MenuItems";
import "../styles/Order.scss";

const Order = (): JSX.Element => {
  return (
    <div className="menu-flex">
      <div className="menu-container">
        <MenuItems />
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </div>
  );
};

export default Order;
