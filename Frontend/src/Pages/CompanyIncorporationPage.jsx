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

const numberOfDirectorsOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function CompanyIncorporationPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    applicationType: type
      ? type.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
      : "Private Limited Company",

    fullName: "",
    mobile: "",
    email: "",
    companyName: "",
    natureOfBusiness: "",
    investment: "₹ 0 - 1 Lakh",
    members: "2",
    state: "",
    address1: "",
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
    if (!formData.mobile || formData.mobile.length !== 10) newErrors.mobile = "Valid 10 digit number required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email required";
    if (!formData.natureOfBusiness) newErrors.natureOfBusiness = "Required";
    if (!formData.companyName.trim()) newErrors.companyName = "Required";
    if (!formData.state) newErrors.state = "Required";
    if (!formData.address1.trim()) newErrors.address1 = "Required";
    if (!formData.members) newErrors.members = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const payload = {
      "ctl00$ContentPlaceHolder1$ddlApplicationType": formData.applicationType || "",
      "ctl00$ContentPlaceHolder1$txtName": formData.fullName.trim() || "",
      "ctl00$ContentPlaceHolder1$txtEmail": formData.email.trim() || "",
      "ctl00$ContentPlaceHolder1$txtPhone1": formData.mobile || "",

      "ctl00$ContentPlaceHolder1$txtCompanyName": formData.companyName.trim() || "",
      "ctl00$ContentPlaceHolder1$ddlNatureBusiness": formData.natureOfBusiness || "",
      "ctl00$ContentPlaceHolder1$ddlInitialCapital": formData.investment || "",
      "ctl00$ContentPlaceHolder1$ddlNoOfDirectors": formData.members || "",

      "ctl00$ContentPlaceHolder1$ddlState": formData.state || "",
      "ctl00$ContentPlaceHolder1$txtHOUSE": formData.address1.trim() || "",

      "ctl00$ContentPlaceHolder1$txtDate": new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    try {
      const API_URL = process.env.VITE_API_BASE_URL;

const res = await fetch(`${API_URL}/api/leads/submit`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
      if (!res.ok) throw new Error("Failed to save lead");

      console.log("✅ Lead saved in MongoDB");

      // Optional CRM call
      try {
        await fetch("https://legalpapers.konceptsoftwaresolutions.com/leadRoutes", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(payload).toString(),
        });
        console.log("✅ CRM success");
      } catch (crmError) {
        console.warn("⚠️ CRM failed but lead saved", crmError);
      }

      sessionStorage.setItem("companySubmittedData", JSON.stringify(formData));

      alert("Form submitted successfully!");
      navigate("/payment-summary");

    } catch (err) {
      console.error("❌ Submission failed", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900">
            Company Incorporation
          </h1>
          <p className="text-slate-600 mt-4 text-lg">
            Register your {formData.applicationType} in just 5 days with expert support
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-12 text-center text-white">
            <h2 className="text-3xl font-bold">Start Your Journey</h2>
            <p className="text-sm opacity-90 mt-2">
              MCA Compliant • Expert Guided • 100% Digital Process
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-10 space-y-8">

            {/* Company Type */}
            <div>
              <label className="text-slate-700 font-medium block mb-2">Company Type</label>
              <select 
                name="applicationType" 
                value={formData.applicationType}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white text-slate-900"
              >
                {companyTypes.map((ct) => (
                  <option key={ct} value={ct}>{ct}</option>
                ))}
              </select>
            </div>

            {/* Personal Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-slate-700 font-medium block mb-2">Full Name *</label>
                <input 
                  name="fullName" 
                  placeholder="Enter your full name" 
                  value={formData.fullName} 
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-2xl border bg-white text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition ${errors.fullName ? "border-red-500" : "border-slate-300"}`} 
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="text-slate-700 font-medium block mb-2">Mobile Number *</label>
                <input 
                  name="mobile" 
                  placeholder="10 digit mobile number" 
                  value={formData.mobile} 
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-2xl border bg-white text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition ${errors.mobile ? "border-red-500" : "border-slate-300"}`} 
                />
                {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
              </div>
            </div>

            <div>
              <label className="text-slate-700 font-medium block mb-2">Email ID *</label>
              <input 
                name="email" 
                type="email"
                placeholder="your@email.com" 
                value={formData.email} 
                onChange={handleChange}
                className={`w-full px-5 py-4 rounded-2xl border bg-white text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition ${errors.email ? "border-red-500" : "border-slate-300"}`} 
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Business Details */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-slate-900 font-semibold mb-5 text-lg">Business Details</h3>

              <div className="mb-6">
                <label className="text-slate-700 font-medium block mb-2">Nature of Business *</label>
                <select 
                  name="natureOfBusiness" 
                  value={formData.natureOfBusiness}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-2xl border bg-white text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 ${errors.natureOfBusiness ? "border-red-500" : "border-slate-300"}`}
                >
                  <option value="">Select Nature of Business</option>
                  {natureOfBusinessOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.natureOfBusiness && <p className="text-red-500 text-sm mt-1">{errors.natureOfBusiness}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-slate-700 font-medium block mb-2">Company Name *</label>
                  <input 
                    name="companyName" 
                    placeholder="Enter proposed company name" 
                    value={formData.companyName} 
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-2xl border bg-white text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition ${errors.companyName ? "border-red-500" : "border-slate-300"}`} 
                  />
                  {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                </div>

                <div>
                  <label className="text-slate-700 font-medium block mb-2">Initial Capital</label>
                  <select 
                    name="investment" 
                    value={formData.investment}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-300 bg-white text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  >
                    {initialCapitalOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* State, Directors & Address */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-slate-700 font-medium block mb-2">State *</label>
                <select 
                  name="state" 
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-2xl border bg-white text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 ${errors.state ? "border-red-500" : "border-slate-300"}`}
                >
                  <option value="">Select State</option>
                  {states.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
              </div>

              <div>
                <label className="text-slate-700 font-medium block mb-2">Number of Directors / Partners *</label>
                <select 
                  name="members" 
                  value={formData.members}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-300 bg-white text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                >
                  {numberOfDirectorsOptions.map(num => (
                    <option key={num} value={num}>{num} Directors</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-slate-700 font-medium block mb-2">Registered Office Address *</label>
              <input 
                name="address1" 
                placeholder="Enter full registered address" 
                value={formData.address1} 
                onChange={handleChange}
                className={`w-full px-5 py-4 rounded-2xl border bg-white text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition ${errors.address1 ? "border-red-500" : "border-slate-300"}`} 
              />
              {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 mt-8 rounded-2xl font-semibold text-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white transition-all shadow-lg active:scale-[0.98] disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit & Continue →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}