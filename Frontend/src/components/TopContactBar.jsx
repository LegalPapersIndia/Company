import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const TopContactBar = () => {
  return (
    <div className="relative bg-white border-b border-slate-200 text-sm overflow-hidden">
      
      {/* Light Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-slate-600">
        
        {/* Left Side - Contact Info */}
        <div className="flex items-center gap-5 flex-wrap">
          
          <a
            href="tel:+919211037448"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-50 text-blue-600">
              <FaPhoneAlt size={12} />
            </span>
            +91 92110 37448
          </a>

          <a
            href="mailto:info@incorpfast.in"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-50 text-blue-600">
              <FaEnvelope size={12} />
            </span>
            info@incorpfast.in
          </a>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          
          {/* WhatsApp Highlight */}
          <a
            href="https://wa.me/919211037448"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-all duration-300 font-medium"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>

          {/* Timing */}
          <span className="text-xs text-slate-500 hidden sm:block">
            Mon–Sat: 10 AM – 6 PM
          </span>

        </div>
      </div>
    </div>
  );
};

export default TopContactBar;