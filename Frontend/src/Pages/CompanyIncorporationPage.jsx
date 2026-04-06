import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const states = [
  "Uttar Pradesh","Maharashtra","Delhi","Gujarat","Karnataka",
  "Tamil Nadu","Rajasthan","Haryana","Punjab","Bihar","West Bengal"
];

export default function CompanyIncorporationPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    applicationType: type
      ? type.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
      : "",
    fullName: "",
    mobile: "",
    email: "",
    natureOfBusiness: "",
    authorizedCapital: "",
    companyName: "",
    state: "",
    address1: "",
    members: "2",
    investment: "0-10 Lakhs",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "mobile") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!formData.mobile || formData.mobile.length !== 10)
      newErrors.mobile = "Valid 10 digit number required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.natureOfBusiness.trim())
      newErrors.natureOfBusiness = "Required";
    if (!formData.companyName.trim())
      newErrors.companyName = "Required";
    if (!formData.state) newErrors.state = "Required";
    if (!formData.address1.trim())
      newErrors.address1 = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const payload = {
      serviceCategory: "companyIncorporation",
      leadSource: "regifast.in",
      ...formData,
      _timestamp: Date.now(),
    };

    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/company`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});

      fetch("https://legalpapers.konceptsoftwaresolutions.com/leadRoutes", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
      }).catch(() => {});

      sessionStorage.setItem("companySubmittedData", JSON.stringify(payload));
      navigate("/payment-summary");

    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden px-4 py-16">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto relative animate-[fadeIn_0.6s_ease]">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Company Incorporation
          </h1>
          <p className="text-gray-400 mt-3 text-lg">
            Register your {formData.applicationType} in just 7 days
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-10 text-center text-white">
            <h2 className="text-3xl font-bold">Start Your Journey</h2>
            <p className="text-sm opacity-90 mt-1">
              MCA Compliant • Expert Guided • Fast Process
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">

            {/* Progress */}
            <div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">Step 1 of 3</p>
            </div>

            {/* Company Type */}
            <div>
              <label className="text-gray-400 text-sm">Company Type</label>
              <div className="mt-1 px-4 py-3 rounded-xl bg-[#0F172A]/80 border border-white/10 text-white">
                {formData.applicationType}
              </div>
            </div>

            {/* Inputs */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="focus-within:scale-[1.02] transition">
                <input name="fullName" placeholder="Full Name *"
                  value={formData.fullName} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white placeholder-gray-400 focus:ring-2 transition ${errors.fullName ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`} />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div className="focus-within:scale-[1.02] transition">
                <input name="mobile" placeholder="Mobile Number *"
                  value={formData.mobile} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white placeholder-gray-400 focus:ring-2 transition ${errors.mobile ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`} />
                {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="focus-within:scale-[1.02] transition">
              <input name="email" placeholder="Email ID *"
                value={formData.email} onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white placeholder-gray-400 focus:ring-2 transition ${errors.email ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`} />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Business */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-white mb-3">Business Details</h3>

              <input name="natureOfBusiness" placeholder="Nature of Business *"
                value={formData.natureOfBusiness} onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white placeholder-gray-400 focus:ring-2 transition ${errors.natureOfBusiness ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`} />
            </div>

            {/* Capital + Name */}
            <div className="grid md:grid-cols-2 gap-5">
              <input name="authorizedCapital" placeholder="Authorized Capital"
                value={formData.authorizedCapital} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400" />

              <input name="companyName" placeholder="Company Name *"
                value={formData.companyName} onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white placeholder-gray-400 focus:ring-2 transition ${errors.companyName ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`} />
            </div>

            {/* Address */}
            <div className="grid md:grid-cols-2 gap-5">
              <select name="state" value={formData.state}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white focus:ring-2 appearance-none ${errors.state ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`}>
                <option value="">Select State *</option>
                {states.map(s => <option key={s}>{s}</option>)}
              </select>

              <input name="address1" placeholder="Address *"
                value={formData.address1} onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white placeholder-gray-400 focus:ring-2 ${errors.address1 ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`} />
            </div>

            {/* Members + Investment */}
            <div className="grid md:grid-cols-2 gap-5">
              <input type="number" name="members"
                value={formData.members} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border border-white/10 text-white focus:ring-2 focus:ring-cyan-400" />

              <select name="investment"
                value={formData.investment}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border border-white/10 text-white focus:ring-2 focus:ring-cyan-400">
                <option>₹ 0 - 10 Lakhs</option>
                <option>₹ 10 Lakh - 1 Crore</option>
                <option>More than ₹ 1 Crore</option>
              </select>
            </div>

            {/* Trust */}
            <div className="flex justify-center gap-6 text-gray-400 text-sm">
              <span>🔒 Secure</span>
              <span>⚡ Fast</span>
              <span>💼 Verified</span>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-95 transition-all shadow-lg hover:shadow-cyan-500/40"
            >
              {loading ? "Submitting..." : "Submit & Continue →"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}