import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const MenuItems = (props: any): JSX.Element => {
  const dispatch = useAppDispatch();
  console.log(props);
  const menu = useAppSelector((state) => state.menu);
  return (
    <div>
      <h2>Menu Items</h2>
      {menu.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button
              className="productButton"
              key={item.name}
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
