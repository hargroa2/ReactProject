import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import "../styles/Order.scss";
import "../components/MenuItems";

const Cart = (props: any): JSX.Element => {
  const cart = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();
  return (
    <div className="cart-space">
      <h1>Your Cart</h1>
      {cart.map((item, index) => {
        return (
          <div key={index} className="cart-sizing">
            <div className="item-container">
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
              <button
                key={item.name}
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item })
                }
                className="remove-button"
              >
                Remove From Cart
              </button>
            </div>
          </div>
        );
      })}
      <div id="complete-order">
        <NavLink to="/ordercomplete" className="complete">
          <span>Complete Order</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
