import React from "react";
import Sidebar from "./Sidebar.jsx";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import "./HomePage.css";
function AppLayout() {
  return (
    <div>
        <Header />
        <Sidebar />
        <div className="content">
        <Outlet />
        </div>
    </div>
  );
}

export default AppLayout;