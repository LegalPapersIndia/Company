import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
"Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
"Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
"Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
"Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
"Uttar Pradesh", "Uttarakhand", "West Bengal",
"Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
"Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const companyTypes = [
  "Private Limited Company",
  "One Person Company (OPC)",
  "Limited Liability Partnership (LLP)",
  "Partnership Firm",
  "Section 8 Company"
];

const natureOfBusinessOptions = [
  "Manufacturer Exporter",
  "Merchant Exporter",
  "Merchant cum Manufacturer Exporter",
  "Service Provider",
  "Merchant cum Service Provider",
  "Manufacturer cum Service Provider",
  "Merchant cum Manufacturer cum Service Provider",
  "Others"
];

const initialCapitalOptions = [
  "₹ 0 - 1 Lakh",
  "₹ 1 Lakh - 5 Lakhs",
  "₹ 5 Lakhs - 10 Lakhs",
  "₹ 10 Lakhs - 25 Lakhs",
  "₹ 25 Lakhs - 1 Crore",
  "More than ₹ 1 Crore"
];

const numberOfDirectorsOptions = ["1","2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function CompanyIncorporationPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    applicationType: type
      ? type.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
      : "Private Limited Company", // Default if no type in URL
    fullName: "",
    mobile: "",
    email: "",
    natureOfBusiness: "",
    authorizedCapital: "",
    companyName: "",
    state: "",
    address1: "",
    members: "2",                    // Now using as Number of Directors
    investment: "₹ 0 - 1 Lakh",      // Changed label to Initial Capital
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
    if (!formData.natureOfBusiness)
      newErrors.natureOfBusiness = "Required";
    if (!formData.companyName.trim())
      newErrors.companyName = "Required";
    if (!formData.state) newErrors.state = "Required";
    if (!formData.address1.trim())
      newErrors.address1 = "Required";
    if (!formData.members) newErrors.members = "Required";

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
            {/* Company Type - Now Dropdown */}
            <div>
              <label className="text-gray-400 text-sm block mb-1">Company Type *</label>
              <select 
                name="applicationType" 
                value={formData.applicationType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border border-white/10 text-white focus:ring-2 focus:ring-cyan-400 appearance-none"
              >
                {companyTypes.map((ct) => (
                  <option key={ct} value={ct}>{ct}</option>
                ))}
              </select>
            </div>

            {/* Personal Details */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <input name="fullName" placeholder="Full Name *" required
                  value={formData.fullName} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white placeholder-gray-400 focus:ring-2 transition ${errors.fullName ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`} />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <input name="mobile" placeholder="Mobile Number *" required
                  value={formData.mobile} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white placeholder-gray-400 focus:ring-2 transition ${errors.mobile ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`} />
                {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
              </div>
            </div>

            <div>
              <input name="email" placeholder="Email ID *" required
                value={formData.email} onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white placeholder-gray-400 focus:ring-2 transition ${errors.email ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`} />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Business Details */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-white mb-3">Business Details</h3>

              {/* Nature of Business - Dropdown */}
              <div className="mb-5">
                <label className="text-gray-400 text-sm block mb-1">Nature of Business *</label>
                <select 
                  name="natureOfBusiness" 
                  value={formData.natureOfBusiness}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white focus:ring-2 appearance-none ${errors.natureOfBusiness ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`}
                >
                  <option value="">Select Nature of Business</option>
                  {natureOfBusinessOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.natureOfBusiness && <p className="text-red-400 text-xs mt-1">{errors.natureOfBusiness}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-400 text-sm block mb-1">Company Name *</label>
                  <input name="companyName" placeholder="Company Name *"
                    value={formData.companyName} onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white placeholder-gray-400 focus:ring-2 transition ${errors.companyName ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`} />
                  {errors.companyName && <p className="text-red-400 text-xs mt-1">{errors.companyName}</p>}
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-1">Initial Capital</label>
                  <select 
                    name="investment" 
                    value={formData.investment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border border-white/10 text-white focus:ring-2 focus:ring-cyan-400 appearance-none"
                  >
                    {initialCapitalOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Address & Directors */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-gray-400 text-sm block mb-1">State *</label>
                <select name="state" value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white focus:ring-2 appearance-none ${errors.state ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`}>
                  <option value="">Select State *</option>
                  {states.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Number of Directors *</label>
                <select 
                  name="members" 
                  value={formData.members}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white focus:ring-2 appearance-none ${errors.members ? "border-red-500" : "border-white/10"}`}
                >
                  {numberOfDirectorsOptions.map(num => (
                    <option key={num} value={num}>{num} Directors</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-gray-400 text-sm block mb-1">Registered Address *</label>
              <input name="address1" placeholder="Full Address *" 
                value={formData.address1} onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-[#0F172A]/80 border text-white placeholder-gray-400 focus:ring-2 ${errors.address1 ? "border-red-500 focus:ring-red-400" : "border-white/10 focus:ring-cyan-400"}`} />
              {errors.address1 && <p className="text-red-400 text-xs mt-1">{errors.address1}</p>}
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center gap-6 text-gray-400 text-sm pt-4">
              <span>🔒 Secure</span>
              <span>⚡ Fast</span>
              <span>💼 Verified</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-95 transition-all shadow-lg hover:shadow-cyan-500/40 disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit & Continue →"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}