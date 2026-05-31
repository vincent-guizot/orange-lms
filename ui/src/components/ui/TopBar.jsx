import React, { useState, useEffect, useRef } from "react";
import {
  Sun,
  Moon,
  ChevronDown,
  LogOut,
  User,
  PlusCircle,
  BookOpen,
  Calendar,
  CheckSquare,
  FileText,
  Archive,
  UserPlus,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { useThemeStore } from "@/features/theme/theme.store";

const TopBar = ({ username = "Vincent" }) => {
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenLogin, setDropdownOpenLogin] = useState(false);

  const createRef = useRef(null);
  const loginRef = useRef(null);

  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (createRef.current && !createRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }

      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setDropdownOpenLogin(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between dark:bg-neutral-950 border-b border-orange-100 dark:border-neutral-800 px-6 h-16 transition-colors">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 dark:bg-neutral-800 border border-orange-100 dark:border-neutral-700 text-orange-600 dark:text-orange-400 hover:scale-105 transition-all"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Create Dropdown */}
        <div className="relative" ref={createRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-all bg-gray-100 dark:bg-neutral-800 px-4 py-2 rounded-xl"
          >
            <PlusCircle size={16} />
            <span className="font-medium">Create</span>
            <ChevronDown size={16} />
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-neutral-900 border dark:border-neutral-700 rounded-xl shadow-lg z-50 divide-y">
              {/* Class / Meeting */}
              <div className="p-2">
                <p className="text-xs font-semibold text-orange-600 mb-2 px-2">
                  Class / Meeting
                </p>

                <Link
                  to="/classes/create"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-orange-50 dark:hover:bg-neutral-800 rounded-lg"
                >
                  <BookOpen size={16} />
                  Class
                </Link>

                <Link
                  to="/meetings/create"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-orange-50 dark:hover:bg-neutral-800 rounded-lg"
                >
                  <Calendar size={16} />
                  Meeting
                </Link>
              </div>

              {/* Mentor / Mentee */}
              <div className="p-2">
                <p className="text-xs font-semibold text-green-600 mb-2 px-2">
                  Mentor / Mentee
                </p>

                <Link
                  to="/mentors/create"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-green-50 dark:hover:bg-neutral-800 rounded-lg"
                >
                  <UserPlus size={16} />
                  Mentor
                </Link>

                <Link
                  to="/mentees/create"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-green-50 dark:hover:bg-neutral-800 rounded-lg"
                >
                  <UserPlus size={16} />
                  Mentee
                </Link>
              </div>

              {/* Task / Note / Material */}
              <div className="p-2">
                <p className="text-xs font-semibold text-blue-600 mb-2 px-2">
                  Task / Note / Material
                </p>

                <Link
                  to="/tasks/create"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-blue-50 dark:hover:bg-neutral-800 rounded-lg"
                >
                  <CheckSquare size={16} />
                  Task
                </Link>

                <Link
                  to="/notes/create"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-blue-50 dark:hover:bg-neutral-800 rounded-lg"
                >
                  <FileText size={16} />
                  Note
                </Link>

                <Link
                  to="/materials/create"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-blue-50 dark:hover:bg-neutral-800 rounded-lg"
                >
                  <Archive size={16} />
                  Material
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Side */}
      <div className="relative" ref={loginRef}>
        <button
          onClick={() => setDropdownOpenLogin(!dropdownOpenLogin)}
          className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-all"
        >
          <User size={20} />
          <span className="font-medium">{username}</span>
          <ChevronDown size={16} />
        </button>

        {dropdownOpenLogin && (
          <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-neutral-900 border dark:border-neutral-700 rounded-xl shadow-lg z-50">
            <button className="flex items-center w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors">
              <User size={16} className="mr-2" />
              Account
            </button>

            <button className="flex items-center w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors text-red-500">
              <LogOut size={16} className="mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
