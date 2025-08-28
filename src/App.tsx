import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ParticipationSection from "./components/ParticipationSection";

import Footer from "./components/Footer";
import ParticipationCategories from "./components/ParticipationCategories";
import CitizenConsultationPage from "./pages/Consulta_Ciudadana";
import AccountabilityPage from "./pages/Rendicion_Cuentas";
import ParticipationPage from "./pages/Participacion_Ciudadana";
import PlanningBudgetPage from "./pages/Planeacion_Presupuesto";
import SocialControlPage from "./pages/Control_Social";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="container mx-auto px-4 py-8">
                  <div className="mt-16">
                    <ParticipationSection />
                  </div>
                  <ParticipationCategories />
                  {/* Images
                <div className="mt-16">
                  <ImageGallery />
                </div>
                */}
                </main>
                <Footer />
              </>
            }
          />

          {/* Category Pages */}
          <Route path="/participacion" element={<ParticipationPage />} />
          <Route
            path="/planeacion-presupuesto"
            element={<PlanningBudgetPage />}
          />
          <Route
            path="/consulta-ciudadana"
            element={<CitizenConsultationPage />}
          />
          <Route path="/rendicion-cuentas" element={<AccountabilityPage />} />
          <Route path="/control-social" element={<SocialControlPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
