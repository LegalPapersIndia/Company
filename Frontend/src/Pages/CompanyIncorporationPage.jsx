import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const states = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand",
  "Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
  "Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman and Nicobar Islands","Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"
];

const companyTypes = [
  "Private Limited Company",
  "One Person Company (OPC)",
  "Limited Liability Partnership (LLP)",
  "Partnership Firm",
  "Section 8 Company"
];

const natureOfBusinessOptions = [
  "Manufacturer Exporter","Merchant Exporter",
  "Merchant cum Manufacturer Exporter","Service Provider",
  "Merchant cum Service Provider","Manufacturer cum Service Provider",
  "Merchant cum Manufacturer cum Service Provider","Others"
];

const initialCapitalOptions = [
  "₹ 0 - 1 Lakh","₹ 1 Lakh - 5 Lakhs","₹ 5 Lakhs - 10 Lakhs",
  "₹ 10 Lakhs - 25 Lakhs","₹ 25 Lakhs - 1 Crore","More than ₹ 1 Crore"
];

const numberOfDirectorsOptions = ["1","2","3","4","5","6","7","8","9","10"];

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
    natureOfBusiness: "",
    companyName: "",
    state: "",
    address1: "",
    members: "2",
    investment: "₹ 0 - 1 Lakh",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  let processedValue = value;

  if (name === "mobile") {
    processedValue = value.replace(/\D/g, "").slice(0, 10);
  }

  // Real formData keys update karo (jo CRM mein chahiye)
  const keyMap = {
    fullName: "fullName",
    mobile: "mobile",
    email: "email",
    applicationType: "applicationType",
    natureOfBusiness: "natureOfBusiness",
    companyName: "companyName",
    state: "state",
    address1: "address1",
    members: "members",
    investment: "investment",
  };

  setFormData(prev => ({ ...prev, [keyMap[name] || name]: processedValue }));

  if (errors[name]) {
    setErrors(prev => ({ ...prev, [name]: "" }));
  }
};

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!/^[6-9]\d{9}$/.test(formData.mobile))
      newErrors.mobile = "Valid 10 digit number required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.natureOfBusiness)
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

    // ✅ CRM Payload (IMPORTANT)
const payload = {
  "ctl00$ContentPlaceHolder1$ddlCompanyType": formData.applicationType,
  "ctl00$ContentPlaceHolder1$txtName": formData.fullName,
  "ctl00$ContentPlaceHolder1$txtEmail": formData.email,
  "ctl00$ContentPlaceHolder1$txtPhone1": formData.mobile,
  "ctl00$ContentPlaceHolder1$ddlNatureBusiness": formData.natureOfBusiness,
  "ctl00$ContentPlaceHolder1$txtCompanyName": formData.companyName,
  "ctl00$ContentPlaceHolder1$ddlState": formData.state,
  "ctl00$ContentPlaceHolder1$txtAddress": formData.address1,
  "ctl00$ContentPlaceHolder1$ddlDirectors": formData.members,
  "ctl00$ContentPlaceHolder1$ddlCapital": formData.investment,
  "ctl00$ContentPlaceHolder1$txtDate": new Date().toISOString().slice(0, 19).replace("T", " "),

  serviceCategory: "Company Incorporation",
  leadSource: "regifast.in",
};


    console.log("Sending Payload:", payload);        // ← Check karo console mein
  console.log("Encoded Body:", new URLSearchParams(payload).toString());

    try {
      await fetch("https://legalpapers.konceptsoftwaresolutions.com/leadRoutes", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload).toString(),
      });


      const text = await response.text();   // ← response dekhne ke liye
    console.log("CRM Response:", text);
    console.log("Status:", response.status);

if (response.ok) {
      sessionStorage.setItem("companySubmittedData", JSON.stringify(payload));
      navigate("/payment-summary");
    } else {
      alert(`Failed! Status: ${response.status}`);
    }
  } catch (err) {
    console.error("Fetch Error:", err);
    alert("Network error! Check console.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-2xl w-full max-w-2xl space-y-5">

        <h2 className="text-3xl text-white font-bold text-center">
          Company Incorporation
        </h2>

        <input name="fullName" placeholder="Full Name"
          onChange={handleChange} className="input" />

        <input name="mobile" placeholder="Mobile"
          onChange={handleChange} className="input" />

        <input name="email" placeholder="Email"
          onChange={handleChange} className="input" />

        <select name="applicationType" onChange={handleChange} className="input">
          {companyTypes.map(i => <option key={i}>{i}</option>)}
        </select>

        <select name="natureOfBusiness" onChange={handleChange} className="input">
          <option value="">Nature of Business</option>
          {natureOfBusinessOptions.map(i => <option key={i}>{i}</option>)}
        </select>

        <input name="companyName" placeholder="Company Name"
          onChange={handleChange} className="input" />

        <select name="state" onChange={handleChange} className="input">
          <option value="">Select State</option>
          {states.map(s => <option key={s}>{s}</option>)}
        </select>

        <input name="address1" placeholder="Address"
          onChange={handleChange} className="input" />

        <select name="members" onChange={handleChange} className="input">
          {numberOfDirectorsOptions.map(n => <option key={n}>{n} Directors</option>)}
        </select>

        <select name="investment" onChange={handleChange} className="input">
          {initialCapitalOptions.map(i => <option key={i}>{i}</option>)}
        </select>

        <button type="submit" disabled={loading}
          className="w-full bg-cyan-500 py-3 rounded-xl text-white font-semibold">
          {loading ? "Submitting..." : "Submit"}
        </button>

      </form>
    </div>
  );
}