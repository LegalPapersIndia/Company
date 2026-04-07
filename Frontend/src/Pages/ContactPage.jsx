import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden py-20 px-6">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gray-200 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative animate-[fadeIn_0.6s_ease]">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-gray-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about Company Incorporation, Private Limited, LLP, OPC or any MCA service?
            Our team is ready to help you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Phone */}
          <div className="group bg-white border border-gray-200 rounded-3xl p-10 text-center hover:scale-[1.04] hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-blue-200">
            
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition">
              <FaPhoneAlt size={34} />
            </div>

            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Call Us</h3>
            <p className="text-xl text-gray-700 mb-1">+91 92110 37448</p>
            <p className="text-gray-500 text-sm">Mon - Sat | 10:00 AM - 7:00 PM</p>
          </div>

          {/* Email */}
          <div className="group bg-white border border-gray-200 rounded-3xl p-10 text-center hover:scale-[1.04] hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-blue-200">
            
            <div className="w-20 h-20 bg-gray-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition">
              <FaEnvelope size={34} />
            </div>

            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Email Us</h3>
            <p className="text-gray-700 text-lg break-all">info@incofast.in</p>
            <p className="text-gray-500 text-sm mt-2">We reply within 2-4 hours</p>
          </div>

          {/* WhatsApp */}
          <div className="group bg-white border border-gray-200 rounded-3xl p-10 text-center hover:scale-[1.04] hover:border-green-400 transition-all duration-300 shadow-md hover:shadow-green-200 md:col-span-2 lg:col-span-1">
            
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition">
              <FaWhatsapp size={34} />
            </div>

            <h3 className="text-2xl font-semibold text-blue-700 mb-2">WhatsApp Support</h3>
            <p className="text-gray-700 text-lg mb-1">+91 92110 37448</p>
            <p className="text-gray-500 text-sm">
              Instant support for incorporation queries
            </p>

            {/* Divider */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-blue-700 mb-2 font-medium">Support Hours</h4>
              <p className="text-gray-700 text-sm">Monday – Saturday: 10 AM – 7 PM</p>
              <p className="text-gray-500 text-xs mt-1">Sunday: Closed</p>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-700 text-lg mb-6">
            Prefer instant help? Call or WhatsApp us now.
          </p>

          <a
            href="tel:+919211037448"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-gray-400 text-white font-semibold hover:scale-105 transition-all shadow-md hover:shadow-blue-300"
          >
            📞 Call Now
          </a>
        </div>

      </div>
    </div>
  );
}