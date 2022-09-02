import Cart from "./Cart";
import MenuItems from "./MenuItems";
import "../styles/Order.scss";
import "../styles/Navbar.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Order = (): JSX.Element => {
  return (
    <div className="menu-flex">
      <Navbar />
      <div className="online-flex">
        <div className="menu-container">
          <MenuItems />
        </div>
        <div className="cart-container">
          <Cart />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
