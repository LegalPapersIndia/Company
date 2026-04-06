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
    <section id="stats" className="relative py-24 bg-gradient-to-b from-[#0A1628] to-[#050d1a] text-white overflow-hidden">
      
      {/* Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our Journey & <span className="text-blue-400">Live Stats</span>
          </h2>
          <p className="text-gray-300">
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
                className="group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-transparent hover:from-blue-500/40 transition-all duration-500"
              >
                <div className="rounded-2xl bg-white/5 backdrop-blur-xl p-8 text-center border border-white/10 group-hover:border-blue-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
                  
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {count.toLocaleString()}+
                  </div>

                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Applications */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-transparent">
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl p-8 border border-white/10">
              
              <h3 className="text-xl font-semibold mb-8 text-white">
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
                          <span className="text-gray-300">{type.name}</span>
                        </div>
                        <span className="text-blue-400 font-semibold">
                          +{value}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-700"
                          style={{ width: `${value * 2}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-transparent">
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl p-8 border border-white/10">
              
              <h3 className="text-xl font-semibold mb-8 text-white">
                MCA Portal Insights
              </h3>

              <div className="space-y-6 text-gray-300 text-sm">
                
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span>Total Companies in India</span>
                  <span className="font-mono text-white font-semibold">
                    18,47,392
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span>New Registrations Today</span>
                  <span className="font-mono text-emerald-400 font-semibold">
                    1,284
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>LLP Filings This Week</span>
                  <span className="font-mono text-white font-semibold">
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