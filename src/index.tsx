import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Contact from "./components/Contact";
import Error from "./components/Error";
import OrderComplete from "./components/OrderComplete";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/ordercomplete" element={<OrderComplete />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
