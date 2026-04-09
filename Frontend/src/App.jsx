import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import BenefitsSection from "./components/BenefitsSection";
import DocumentsSection from "./components/DocumentSection";
import FAQSection from "./components/FAQSection";
import LatestUpdates from "./components/LatestUpdates";

import ContactPage from "./Pages/ContactPage";
import DisclaimerPage from "./Pages/DisclaimerPage";
import RefundPolicyPage from "./Pages/RefundPolicyPage";
import TermsAndConditionsPage from "./Pages/TermsAndConditionsPage";
import CompanyIncorporationPage from "./Pages/CompanyIncorporationPage";
import PaymentSummary from "./Pages/PaymentSummary";

import AdminDashboard from "./Pages/admin-dashboard";
import AdminLogin from "./Pages/admin-login";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ NEW
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";

function HomePage() {
  return (
    <div className="bg-[#020617]">
      <Hero />
      <StatsSection />
      <LatestUpdates />
      <BenefitsSection />
      <DocumentsSection />
      <FAQSection />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/terms" element={<TermsAndConditionsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />

        <Route
          path="/company-incorporation/:type"
          element={<CompanyIncorporationPage />}
        />

        <Route path="/payment-summary" element={<PaymentSummary />} />

        {/* ✅ Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-[#020617] text-center px-6">
              <div>
                <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                <p className="text-gray-400 mb-6">
                  Page not found
                </p>
              </div>
            </div>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;