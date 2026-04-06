import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0A1628] to-[#050d1a] text-white/70 pt-20 pb-10 overflow-hidden border-t border-white/10">
      
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                📋
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">RegiFast</h2>
                <p className="text-xs text-gray-400">MCA Registered Partner</p>
              </div>
            </div>

            <p className="text-gray-400 max-w-sm leading-relaxed">
              Making company registration fast, simple and reliable across India.
              Trusted by startups and entrepreneurs nationwide.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a href="tel:+919211037448" className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300">
                <FaPhoneAlt />
              </a>
              <a href="https://wa.me/919211037448" target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 hover:bg-green-500/20 hover:text-green-400 transition-all duration-300">
                <FaWhatsapp />
              </a>
              <a href="mailto:info@regifast.in" className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
              <li><Link to="/disclaimer" className="hover:text-blue-400 transition">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/refund-policy" className="hover:text-blue-400 transition">Refund Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-blue-400 transition cursor-pointer">Private Limited Company</li>
              <li className="hover:text-blue-400 transition cursor-pointer">LLP Registration</li>
              <li className="hover:text-blue-400 transition cursor-pointer">OPC Registration</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Section 8 Company</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5">Get In Touch</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <p>
                <span className="block text-gray-500">Phone / WhatsApp</span>
                +91 92110 37448
              </p>
              <p>
                <span className="block text-gray-500">Email</span>
                info@regifast.in
              </p>
              <p className="text-gray-500 mt-4">
                Mon - Sat: 10:00 AM - 7:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 RegiFast. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Made with ❤️ in India • Simplifying Company Incorporation
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;