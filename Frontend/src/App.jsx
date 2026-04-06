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

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>

        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Static Pages */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/terms" element={<TermsAndConditionsPage />} />

        {/* Company Incorporation */}
        <Route
          path="/company-incorporation/:type"
          element={<CompanyIncorporationPage />}
        />

        {/* Payment */}
        <Route path="/payment-summary" element={<PaymentSummary />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-[#020617] text-center px-6">
              <div>
                <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                <p className="text-gray-400 mb-6">
                  Page not found. Redirecting to home...
                </p>
              </div>
            </div>
          }
        />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;