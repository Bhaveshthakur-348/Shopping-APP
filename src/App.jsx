import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Product from "./components/Product";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Footer from "./components/footer";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div id="root">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
