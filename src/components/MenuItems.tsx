import { useAppSelector, useAppDispatch } from "../app/hooks";
import "../styles/Order.scss";
import "../App.tsx";

const MenuItems = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const menu = useAppSelector((state) => state.menu);

  return (
    <div>
      <div className="menu-nav">
        <div>
          <ul>
            <li>
              <a href="#Starters">Starters</a>
            </li>
            <li>
              <a href="#Soups & Salads">Soups & Salads</a>
            </li>
            <li>
              <a href="#Traditional Classics">Traditional Classics</a>
            </li>
            <li>
              <a href="#Burgers & Sandwiches">Burgers & Sandwiches</a>
            </li>
            <li>
              <a href="#Sides">Sides</a>
            </li>
            <li>
              <a href="#Drinks">Drinks</a>
            </li>
            <li>
              <a href="#Desserts">Desserts</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="item-flex">
        {menu.map((item, index) => {
          return (
            <div key={index} className="grid-box">
              <div className="link-space">
                <a id={item.section}></a>
                <img src={item.img} alt="food image" className="spacing" />
              </div>
              <div className="food-card">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <p>{item.price}</p>
                <div>
                  <button
                    key={item.name}
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: item,
                      });
                    }}
                    className="order-button"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;
