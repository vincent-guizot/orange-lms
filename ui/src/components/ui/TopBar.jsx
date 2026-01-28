// src/components/ui/TopBar.jsx
import React, { useState } from "react";
import { Instagram, Ticket, ChevronDown, LogOut, User } from "lucide-react";

const TopBar = ({ username = "Vincent" }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white border-b px-6 h-16">
      {/* Left Side - Social Icons */}
      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-pink-500 transition-colors"
        >
          <Instagram size={16} />
        </a>

        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <Ticket size={16} />
        </a>
      </div>

      {/* Right Side - Username + Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
        >
          <User size={20} />
          <span className="font-medium">{username}</span>
          <ChevronDown size={16} />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
            <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <User size={16} className="mr-2" /> Account
            </button>
            <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <LogOut size={16} className="mr-2" /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
