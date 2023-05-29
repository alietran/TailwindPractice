import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserGuard from "./guards/UserGuard";
import Checkout from "./pages/Checkout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<Home />} />
          <Route
            path="/checkout"
            element={
              // check nếu chưa đăng nhập thì kh dc vào trang checkout
              <UserGuard>
                <Checkout />
              </UserGuard>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
