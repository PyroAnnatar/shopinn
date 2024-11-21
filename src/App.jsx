import "./App.css";
import HomePage from "./components/home/HomePage";
import ItemDetail from "./components/itemDetail/ItemDetail";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import Orders from "./components/orders/Orders";
import Checkout from "./components/checkout/Checkout";
import store from "./redux/store";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import CategoryPage from "./components/category/CategoryPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* Dinamik kategori ve zorunlu olmayan filtre */}
            <Route
              path="/category/:category/:filter?"
              element={<CategoryPage />}
            />
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
