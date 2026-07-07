import React from "react";
import { MemoryRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/Login";
import { Onboarding } from "./pages/Onboarding";
import { DashboardLayout } from "./pages/DashboardLayout";
import { MainDashboard } from "./pages/MainDashboard";
import { AIChat } from "./pages/AIChat";
import { BusinessBrain } from "./pages/BusinessBrain";
import { AIEmployees } from "./pages/AIEmployees";
import { AutomationCenter } from "./pages/AutomationCenter";
import { Inventory } from "./pages/Inventory";
import { Reports } from "./pages/Reports";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<MainDashboard />} />
          <Route path="chat" element={<AIChat />} />
          <Route path="brain" element={<BusinessBrain />} />
          <Route path="employees" element={<AIEmployees />} />
          <Route path="automation" element={<AutomationCenter />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
