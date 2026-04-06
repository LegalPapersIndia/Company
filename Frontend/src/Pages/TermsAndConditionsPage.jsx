export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden py-20 px-6">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto relative animate-[fadeIn_0.6s_ease]">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-3">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 text-sm">
            Last Updated: April 06, 2026
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-8 md:p-12 space-y-10 text-gray-300 text-[15px] leading-relaxed">

          {/* About */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              1. About Us
            </h2>
            <p>
              RegiFast is a private consultancy platform assisting entrepreneurs
              with company incorporation services. We are not affiliated with
              the Ministry of Corporate Affairs (MCA) or any government body.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              2. Our Services
            </h2>
            <p>
              We provide professional assistance and guidance for Private Limited
              Company, LLP, OPC, Section 8 Company, and Partnership Firm
              registration including documentation, filing, and compliance support.
            </p>
          </div>

          {/* Liability */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              3. Limitation of Liability
            </h2>
            <p>
              We are not responsible for delays, rejections, or issues arising
              from MCA processes, government regulations, or incomplete/incorrect
              information provided by the client.
            </p>
          </div>

          {/* Highlight Warning */}
          <div className="bg-yellow-500/10 border border-yellow-400/30 border-l-4 border-yellow-400 p-5 rounded-xl">
            <p className="text-yellow-300 text-sm">
              Please ensure that all documents and details provided are accurate
              and complete to avoid delays in your application process.
            </p>
          </div>

          {/* Agreement */}
          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              By using RegiFast services, you agree to these Terms & Conditions.
            </p>
          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center mt-10 text-gray-500 text-xs">
          For further clarification, please contact our support team.
        </div>

      </div>
    </div>
  );
}