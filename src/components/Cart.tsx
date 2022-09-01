import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import "../styles/Order.scss";

const Cart = (): JSX.Element => {
  const cart = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();
  return (
    <div className="">
      <h1>Cart</h1>
      {cart.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button
              key={item.name}
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item })
              }
            >
              Remove From Cart
            </button>
            {/* {item.list.map((c, i) => {
              return (
                <div key={i}>
                  <p>{c.name}</p>
                  <p>{c.price}</p>
                  <button
                    key={c.name}
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item })
                    }
                  >
                    Remove From Cart
                  </button>
                </div>
              );
            })} */}
            {/* <p>{item.list[0].name}</p>
            <p>{item.list[0].price}</p>
            <button
              key={item.list[0].name}
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item })
              }
            >
              Remove From Cart
            </button> */}
          </div>
        );
      })}
      <NavLink to="/ordercomplete">Order Complete</NavLink>
    </div>
  );
};

export default Cart;
