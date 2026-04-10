import React from "react";
import { useNavigate } from "react-router-dom";

const companyTypes = [
  { id: 1, name: "Private Limited", icon: "🏢", desc: "Approval of Company Name + Certificate of Incorporation + PAN Number + TAN Number + 2 DIN of Directors + 2 DSC of Directors + eMOA & eAOA + PF & ESI Registration" },
  { id: 2, name: "OPC", icon: "👤", desc: "Company Name Approval + Certificate of Incorporation + PAN Number + TAN Number + DIN of Director + DSC of Director + eMOA & eAOA + PF & ESI Registration" },
  { id: 3, name: "LLP", icon: "🤝", desc: "Approval of Company Name + Certificate of Incorporation + PAN + TAN + Two DINs + Electronic Memorandum of Association (eMOA) + Electronic Articles of Association (eAOA)" },
  { id: 4, name: "Section 8", icon: "🛡️", desc: "Company Name Approval + Certificate of Incorporation + PAN & TAN Registration + 2 DINs + eMOA & eAOA Documents + Complete Startup Compliance Support" },
  { id: 5, name: "Partnership", icon: "👥", desc: "Basic Name Availability Check + Firm Name Registration + PAN Application + Timely Service + Professional Support" },
  
];

const CompanyCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const slug = type.toLowerCase().replace(/\s+/g, "-");
    navigate(`/company-incorporation/${slug}`);
  };

  return (
    <section id="Card" className="relative py-20 bg-white">
      {/* Light Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {companyTypes.map((type) => (
          <div
            key={type.id}
            onClick={() => handleCardClick(type.name)}
            className="group relative cursor-pointer rounded-3xl p-[1px] bg-gradient-to-b from-blue-600/20 to-transparent hover:from-blue-600/30 transition-all duration-500"
          >
            {/* Card */}
            <div className="h-full rounded-3xl bg-white p-8 text-center border border-slate-200 group-hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/10">
              
              {/* Icon */}
              <div className="text-6xl mb-6 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-6">
                {type.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                {type.name}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed min-h-[60px]">
                {type.desc}
              </p>

              {/* Divider */}
              <div className="w-8 h-[2px] bg-blue-600 mx-auto my-5 opacity-80 group-hover:w-14 transition-all duration-300"></div>

              {/* CTA */}
              <div className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium text-sm transition-all group-hover:text-blue-700">
                Start Incorporation
                <span className="text-lg transition-all duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-blue-500/5 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyCards;