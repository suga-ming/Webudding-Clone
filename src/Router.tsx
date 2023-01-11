import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Cart from "./pages/Cart";
import Email from "./pages/Email";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<SignUp />} />
        <Route path="/join/email" element={<Email />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
