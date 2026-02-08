import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import './App.css'

function App() {

  const { isLogin } = useContext(AuthContext);

  if (!isLogin) return <Login />;

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center py-5 mb-5 bg-blue-700 mask-b-from-neutral-700">Final Mega Project</h1>

      <Navbar />
      <div className="flex">
        <Sidebar />

        <div className="p-5 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
