import React from "react";
import { useNavigate } from "react-router-dom";

const companyTypes = [
  { id: 1, name: "Private Limited", icon: "🏢", desc: "Limited Liability + Easy Funding + Perpetual Succession" },
  { id: 2, name: "LLP", icon: "🤝", desc: "Flexible management + Low compliance for professionals" },
  { id: 3, name: "Section 8", icon: "🛡️", desc: "Non-Profit / NGO Company for social welfare" },
  { id: 4, name: "Partnership", icon: "👥", desc: "Simple setup for small businesses & teams" },
  { id: 5, name: "OPC", icon: "👤", desc: "One Person Company with limited liability" },
];

const CompanyCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const slug = type.toLowerCase().replace(/\s+/g, "-");
    navigate(`/company-incorporation/${slug}`);
  };

  return (
    <section id="Card" className="relative">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {companyTypes.map((type) => (
          <div
            key={type.id}
            onClick={() => handleCardClick(type.name)}
            className="group relative cursor-pointer rounded-3xl p-[1px] bg-gradient-to-b from-blue-500/30 to-transparent hover:from-blue-500/70 transition-all duration-500"
          >
            {/* Card */}
            <div className="h-full rounded-3xl bg-white/5 backdrop-blur-xl p-8 text-center border border-white/10 group-hover:border-blue-400/40 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/10">
              
              {/* Icon */}
              <div className="text-6xl mb-6 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-6">
                {type.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {type.name}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed min-h-[60px]">
                {type.desc}
              </p>

              {/* Divider */}
              <div className="w-8 h-[2px] bg-blue-400 mx-auto my-5 opacity-70 group-hover:w-14 transition-all duration-300"></div>

              {/* CTA */}
              <div className="mt-4 inline-flex items-center gap-2 text-blue-400 font-medium text-sm transition-all">
                Start Incorporation
                <span className="text-lg transition-all duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

              {/* Glow Overlay on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyCards;