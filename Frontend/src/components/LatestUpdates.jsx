import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const updates = [
  {
    title: "MCA Introduces New SPICe+ Form Updates (2026)",
    desc: "Ministry of Corporate Affairs has updated SPICe+ forms for faster company incorporation and improved validation.",
    link: "https://www.mca.gov.in/",
    date: "March 2026",
  },
  {
    title: "Mandatory PAN & TAN Integration for New Companies",
    desc: "PAN and TAN are now automatically issued with company incorporation via SPICe+ Part B.",
    link: "https://www.incometax.gov.in/",
    date: "Feb 2026",
  },
  {
    title: "Digital Signature (DSC) Mandatory for All Directors",
    desc: "All directors must obtain DSC before filing incorporation documents on MCA portal.",
    link: "https://www.mca.gov.in/",
    date: "Jan 2026",
  },
  {
    title: "New LLP Compliance Rules Updated",
    desc: "MCA has revised LLP filing timelines and penalties for late submissions.",
    link: "https://www.mca.gov.in/",
    date: "Dec 2025",
  },
];

const LatestUpdates = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#050d1a] to-[#000814] text-white overflow-hidden">
      
      {/* Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-blue-400">Updates</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest MCA rules, compliance changes and company registration updates
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {updates.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-transparent hover:from-blue-500/50 transition-all duration-500"
            >
              <div className="h-full rounded-2xl bg-white/5 backdrop-blur-xl p-6 border border-white/10 group-hover:border-blue-400/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
                
                {/* Date */}
                <span className="text-xs text-gray-400">
                  {item.date}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold mt-2 mb-3 text-white group-hover:text-blue-400 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-2 text-blue-400 text-sm font-medium">
                  Read More
                  <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestUpdates;