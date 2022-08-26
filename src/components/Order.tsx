import React from "react";
import Cart from "./Cart";
import MenuItems from "./MenuItems";

const Order = (): JSX.Element => {
  return (
    <div>
      <h1>Menu</h1>
      <MenuItems />
      <Cart />
    </div>
  );
};

export default Order;
