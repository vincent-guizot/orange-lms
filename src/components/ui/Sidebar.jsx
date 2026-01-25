import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BookOpen,
  Calendar,
  FileText,
  CheckSquare,
  Archive,
  User,
  Users,
  Settings,
  UserCircle,
} from "lucide-react";
import logo from "../../assets/ORANGECODE LOGO-FULL COLOUR LANDSCAPE.jpg";

const Sidebar = () => {
  const location = useLocation(); // untuk mendeteksi route aktif

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/dashboard" },
    { name: "Classes", icon: <BookOpen size={20} />, path: "/classes" },
    { name: "Meetings", icon: <Calendar size={20} />, path: "/meetings" },
    { name: "Notes", icon: <FileText size={20} />, path: "/notes" },
    { name: "Tasks", icon: <CheckSquare size={20} />, path: "/tasks" },
    { name: "Materials", icon: <Archive size={20} />, path: "/materials" },
    { name: "Mentors", icon: <User size={20} />, path: "/mentors" },
    { name: "Mentees", icon: <Users size={20} />, path: "/mentees" },
  ];

  const bottomItems = [
    { name: "Settings", icon: <Settings size={20} />, path: "/setting" },
    { name: "Profile", icon: <UserCircle size={20} />, path: "/profile" },
  ];

  return (
    <div className="flex flex-col h-screen w-64 px-3 bg-white border-r shadow-sm">
      {/* Logo */}
      <div className="flex items-center justify-center h-20  border-b ">
        {/* <h1 className="text-2xl font-bold">Orange LMS</h1> */}
        <img size={120} src={logo} />
      </div>

      {/* Menu */}
      <div className="flex-1 mt-6">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center w-full px-6 py-3 transition-colors ${
                isActive
                  ? "bg-orange-600 text-white rounded-xl"
                  : "text-gray-700 hover:bg-orange-600 hover:text-white rounded-xl"
              }`}
            >
              {item.icon}
              <span className="ml-4">{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Bottom Menu */}
      <div className="mb-4">
        {bottomItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center w-full px-6 py-3 transition-colors ${
                isActive
                  ? "bg-gray-100 text-orange-700 rounded-xl "
                  : "text-gray-700 hover:bg-orange-600 hover:text-white rounded-xl"
              }`}
            >
              {item.icon}
              <span className="ml-4">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
