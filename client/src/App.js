import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { authenticateUser } from "./features/User/UserSlice";
import { useDispatch } from "react-redux";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import PublicRoute from "./utils/PublicRoute";
import AdminRegister from "./pages/AdminRegister";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(authenticateUser({ ...user }));
    }
  });
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/admin/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/admin/register"
          element={
            <PublicRoute>
              <AdminRegister />
            </PublicRoute>
          }
        />

        <Route path="/product/search/:title" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
