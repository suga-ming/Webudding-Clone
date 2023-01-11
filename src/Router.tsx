import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Cart from "./pages/Cart";
import Email from "./pages/Email";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import SignUp from "./pages/SignUp";
import { isLogin } from "./store/recoil";

const Router = () => {
  const [login] = useRecoilState(isLogin);
  const PrivateCart = () => {
    return login ? <Cart /> : <Navigate to="/login" />;
  };
  const PrivateMyPage = () => {
    return login ? <MyPage /> : <Navigate to="/login" />;
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<SignUp />} />
        <Route path="/join/email" element={<Email />} />
        <Route path="/cart" element={<PrivateCart />}></Route>
        <Route path="/mypage" element={<PrivateMyPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
