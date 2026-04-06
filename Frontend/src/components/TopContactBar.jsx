import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const TopContactBar = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#0A1628] to-[#081224] border-b border-white/10 text-sm overflow-hidden">
      
      {/* Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-gray-400">
        
        {/* Left */}
        <div className="flex items-center gap-5 flex-wrap">
          
          <a
            href="tel:+919211037448"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-md bg-white/5 text-blue-400">
              <FaPhoneAlt size={12} />
            </span>
            +91 92110 37448
          </a>

          <a
            href="mailto:info@regifast.in"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-md bg-white/5 text-blue-400">
              <FaEnvelope size={12} />
            </span>
            info@regifast.in
          </a>

        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          
          {/* WhatsApp Highlight */}
          <a
            href="https://wa.me/919211037448"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-all duration-300"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>

          {/* Timing */}
          <span className="text-xs text-gray-500 hidden sm:block">
            Mon–Sat: 10 AM – 7 PM
          </span>

        </div>
      </div>
    </div>
  );
};

export default TopContactBar;