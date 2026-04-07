import React from "react";
import { Link, useLocation } from "react-router-dom";
import TopContactBar from "./TopContactBar";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <TopContactBar />

      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        
        {/* Subtle Bottom Border Accent */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl shadow-md text-white group-hover:scale-110 transition-transform">
              📋
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                IncoFast
              </h1>
              <p className="text-[10px] text-slate-500 -mt-1">
                MCA Expert • 5 Days Incorporation
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            
            <Link
              to="/"
              className={`relative transition ${
                isActive("/") 
                  ? "text-blue-600 font-semibold" 
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Home
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                isActive("/") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>

            <a 
              href="#stats" 
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Stats
            </a>

            <a 
              href="#faq" 
              className="text-slate-600 hover:text-slate-900 transition"
            >
              FAQ
            </a>

            <Link
              to="/contact"
              className={`transition ${
                isActive("/contact") 
                  ? "text-blue-600 font-semibold" 
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            to="/company-incorporation/private-limited"
            className="relative px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Start Registration
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;