import { useAppSelector, useAppDispatch } from "../app/hooks";
import "../styles/Order.scss";
import "../App.tsx";

const MenuItems = (props: any): JSX.Element => {
  const dispatch = useAppDispatch();
  // console.log(props);
  const menu = useAppSelector((state) => state.menu);
  return (
    <div>
      <div className="menu-nav">
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
      <div className="item-flex">
        {menu.map((item, index) => {
          // console.log(menu);
          return (
            <div key={index} className="">
              <h1 id={item.section}>{item.section}</h1>
              <div className="item-grid">
                {item.list.map((c, i) => {
                  return (
                    <div key={i} className="item-section">
                      <img src={c.img} alt="food image" />
                      <p>{c.name}</p>
                      <p>{c.desc}</p>
                      <p>{c.price}</p>
                      <button
                        key={c.name}
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: item,
                          })
                        }
                      >
                        Add To Cart
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;
