import React from "react";
import { Link, useLocation } from "react-router-dom";
import TopContactBar from "./TopContactBar";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <TopContactBar />

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A1628]/80 border-b border-white/10">
        
        {/* Gradient Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
              📋
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                RegiFast
              </h1>
              <p className="text-[10px] text-gray-400 -mt-1">
                MCA Expert • 7 Days Incorporation
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            
            <Link
              to="/"
              className={`relative transition ${
                isActive("/") ? "text-blue-400" : "text-gray-300 hover:text-white"
              }`}
            >
              Home
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
                isActive("/") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
            <a href="#stats" className="text-gray-300 hover:text-white transition">
              Stats
            </a>

            <a href="#faq" className="text-gray-300 hover:text-white transition">
              FAQ
            </a>

            <Link
              to="/contact"
              className={`transition ${
                isActive("/contact") ? "text-blue-400" : "text-gray-300 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA */}
          <Link
            to="/company-incorporation/private-limited"
            className="relative px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
          >
            Start Registration
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;