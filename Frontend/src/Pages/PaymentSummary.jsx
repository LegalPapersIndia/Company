import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Detail({ label, value }) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-white/10 last:border-0">
      <span className="text-gray-400 text-sm">{label}</span>
      <span className="text-white font-medium text-sm text-right max-w-[60%] break-words">
        {value || "—"}
      </span>
    </div>
  );
}

export default function PaymentSummary() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isCompany, setIsCompany] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let saved = sessionStorage.getItem("companySubmittedData");
    let source = "company";

    if (!saved) {
      saved = sessionStorage.getItem("iecSubmittedData");
      source = "iec";
    }

    if (!saved) {
      setError("No submitted data found. Redirecting...");
      setTimeout(() => navigate("/"), 2000);
      return;
    }

    try {
      const parsed = JSON.parse(saved);

      const isTooOld =
        parsed._timestamp &&
        Date.now() - parsed._timestamp > 45 * 60 * 1000;

      if (isTooOld) throw new Error("Expired");

      setData(parsed);
      setIsCompany(source === "company");
    } catch {
      setError("Session expired. Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    }
  }, [navigate]);

  const handlePay = () => {
    window.location.href =
      "https://www.instamojo.com/@LegalPapersIndia/l52d2d917f393479baf14f1e829a0a65c/";
  };

  const handleEdit = () => {
    if (isCompany) navigate("/company-incorporation");
    else navigate("/iec-registration");
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617]">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl text-center">
          <p className="text-red-400 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617]">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400">Loading details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden py-16 px-4">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto relative animate-[fadeIn_0.6s_ease]">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {isCompany ? "Company Incorporation" : "IEC Application"} Summary
          </h1>
          <p className="text-gray-400 mt-2">
            Review your details before proceeding to payment
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-8 md:p-10">

          <div className="grid md:grid-cols-2 gap-8">

            {/* Left */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-4">Basic Details</h3>

              <Detail label="Application Type" value={isCompany ? data.applicationType : data.ddlApplicationType} />
              <Detail label="Full Name" value={isCompany ? data.fullName : data.txtBusinesEntity} />
              <Detail label="Email" value={isCompany ? data.email : data.txtemail} />
              <Detail label="Mobile" value={isCompany ? data.mobile : data.txtphone} />

              {isCompany && (
                <>
                  <Detail label="Company Name" value={data.companyName} />
                  <Detail label="Business" value={data.natureOfBusiness} />
                </>
              )}
            </div>

            {/* Right */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-4">Additional Details</h3>

              {isCompany ? (
                <>
                  <Detail label="Capital" value={data.authorizedCapital} />
                  <Detail label="Members" value={data.members} />
                  <Detail label="Investment" value={data.investment} />
                  <Detail label="State" value={data.state} />
                  <Detail label="Address" value={data.address1} />
                </>
              ) : (
                <>
                  <Detail label="PAN" value={data.txtPanNo} />
                  <Detail label="Business Type" value={data.ddlConstitution} />
                  <Detail label="Activity" value={data.ddlBsinessActivity} />
                </>
              )}
            </div>

          </div>

          {/* Payment Section */}
          <div className="mt-12 text-center">

            <h3 className="text-2xl text-white mb-2">
              {isCompany ? "Registration Fee" : "Processing Fee"}
            </h3>

            <p className="text-5xl font-extrabold text-cyan-400 mb-4">
              ₹ {isCompany ? "4,999" : "1,950"}
            </p>

            <p className="text-gray-400 mb-8">
              One-time consultancy fee (Govt. charges extra)
            </p>

            <button
              onClick={handlePay}
              className="w-full md:w-auto px-12 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-green-500/40 text-white font-semibold"
            >
              🔒 Pay Securely Now
            </button>

            <p className="text-gray-500 text-sm mt-4">
              Secure payment via Instamojo
            </p>

            {/* Edit */}
            <div className="mt-10">
              <button
                onClick={handleEdit}
                className="text-gray-400 hover:text-white transition"
              >
                ← Edit Details
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}