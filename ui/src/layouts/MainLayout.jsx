// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
import TopBar from "../components/ui/TopBar";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* TopBar */}
        <TopBar username="Vincent" />

        {/* Main Content */}
        <div className="flex-1 bg-gray-50 p-6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
