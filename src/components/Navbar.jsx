import React from "react";
import { FaHome, FaUser, FaList, FaChartLine } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
        <h1 className="text-2xl font-bold p-6">My App</h1>
        <nav className="flex flex-col mt-4">
          <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-700">
            <FaHome className="mr-3" /> Home
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-700">
            <FaUser className="mr-3" /> Dashboard
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-700">
            <FaList className="mr-3" /> Log
          </a>
          <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-700">
            <FaChartLine className="mr-3" /> Activities
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold">Welcome!</h2>
        <p>This is your main content area.</p>
      </div>
    </div>
  );
}
