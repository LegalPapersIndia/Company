import React, { useEffect, useState } from "react";

const StatsSection = () => {
  const companyTypes = [
    { icon: "🏢", name: "Private Limited" },
    { icon: "🤝", name: "LLP" },
    { icon: "🛡️", name: "Section 8" },
    { icon: "👥", name: "Partnership" },
    { icon: "👤", name: "OPC" },
  ];

  // Animated Counter Hook
  const useCounter = (end, duration = 1500) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration]);

    return count;
  };

  const stats = [
    { value: 1248, label: "Total Enquiries" },
    { value: 437, label: "Companies Incorporated" },
    { value: 289, label: "Private Limited" },
    { value: 98, label: "LLP Applications" },
  ];

  return (
    <section id="stats" className="relative py-24 bg-white text-slate-800 overflow-hidden">
      
      {/* Light Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
            Our Journey & <span className="text-blue-600">Live Stats</span>
          </h2>
          <p className="text-slate-600">
            Real-time company incorporation insights across India
          </p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const count = useCounter(stat.value);

            return (
              <div
                key={i}
                className="group rounded-2xl p-[1px] bg-gradient-to-br from-blue-600/10 to-transparent hover:from-blue-600/20 transition-all duration-500"
              >
                <div className="rounded-2xl bg-white p-8 text-center border border-slate-200 group-hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {count.toLocaleString()}+
                  </div>

                  <div className="text-slate-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Applications This Month */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-blue-600/10 to-transparent">
            <div className="rounded-2xl bg-white p-8 border border-slate-200">
              
              <h3 className="text-xl font-semibold mb-8 text-slate-900">
                Applications This Month
              </h3>

              <div className="space-y-6">
                {companyTypes.map((type, i) => {
                  const value = 20 + Math.floor(Math.random() * 35);

                  return (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{type.icon}</span>
                          <span className="text-slate-700 font-medium">{type.name}</span>
                        </div>
                        <span className="text-blue-600 font-semibold">
                          +{value}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-700"
                          style={{ width: `${value * 2}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MCA Portal Insights */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-blue-600/10 to-transparent">
            <div className="rounded-2xl bg-white p-8 border border-slate-200">
              
              <h3 className="text-xl font-semibold mb-8 text-slate-900">
                MCA Portal Insights
              </h3>

              <div className="space-y-6 text-sm">
                
                <div className="flex justify-between border-b border-slate-200 pb-4">
                  <span className="text-slate-600">Total Companies in India</span>
                  <span className="font-mono text-slate-900 font-semibold">
                    18,47,392
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-4">
                  <span className="text-slate-600">New Registrations Today</span>
                  <span className="font-mono text-emerald-600 font-semibold">
                    1,284
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">LLP Filings This Week</span>
                  <span className="font-mono text-slate-900 font-semibold">
                    3,927
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;