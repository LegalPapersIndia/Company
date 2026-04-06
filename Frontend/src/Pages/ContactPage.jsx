import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden py-20 px-6">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative animate-[fadeIn_0.6s_ease]">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about Company Incorporation, Private Limited, LLP, OPC or any MCA service?
            Our team is ready to help you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Phone */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center hover:scale-[1.04] hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
            
            <div className="w-20 h-20 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition">
              <FaPhoneAlt size={34} />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-2">Call Us</h3>
            <p className="text-xl text-gray-300 mb-1">+91 92110 37448</p>
            <p className="text-gray-500 text-sm">Mon - Sat | 10:00 AM - 7:00 PM</p>
          </div>

          {/* Email */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center hover:scale-[1.04] hover:border-cyan-400/40 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
            
            <div className="w-20 h-20 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition">
              <FaEnvelope size={34} />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-2">Email Us</h3>
            <p className="text-gray-300 text-lg break-all">info@regifast.in</p>
            <p className="text-gray-500 text-sm mt-2">We reply within 2-4 hours</p>
          </div>

          {/* WhatsApp */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center hover:scale-[1.04] hover:border-green-400/40 transition-all duration-300 shadow-lg hover:shadow-green-500/20 md:col-span-2 lg:col-span-1">
            
            <div className="w-20 h-20 bg-green-500/10 text-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition">
              <FaWhatsapp size={34} />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-2">WhatsApp Support</h3>
            <p className="text-gray-300 text-lg mb-1">+91 92110 37448</p>
            <p className="text-gray-500 text-sm">
              Instant support for incorporation queries
            </p>

            {/* Divider */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-white mb-2 font-medium">Support Hours</h4>
              <p className="text-gray-300 text-sm">Monday – Saturday: 10 AM – 7 PM</p>
              <p className="text-gray-500 text-xs mt-1">Sunday: Closed</p>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-300 text-lg mb-6">
            Prefer instant help? Call or WhatsApp us now.
          </p>

          <a
            href="tel:+919211037448"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-cyan-500/40"
          >
            📞 Call Now
          </a>
        </div>

      </div>
    </div>
  );
}