import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MangThai from "./pages/MangThai";
import SauSinh from "./pages/SauSinh";
import DinhDuong from "./pages/DinhDuong";
import ChamCon from "./pages/ChamCon";
import MevaBe from "./pages/MevaBe";
import BlogDetail from "./pages/BlogDetail";
import PageLayout from './pages/PageLayout';
import AITips from "./pages/AITips";

function App() {
  return (
    <Router>
       <AITips />
      <div className="app">
       
        <PageLayout>
          
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/mang-thai" element={<MangThai />} />
            <Route path="/sau-sinh" element={<SauSinh />} />
            <Route path="/dinh-duong" element={<DinhDuong />} />
            <Route path="/cham-con" element={<ChamCon />} />
            <Route path="/me-va-be" element={<MevaBe />} />
          </Routes>
          <Footer />

        </PageLayout>


      </div>
    </Router>
  );
}

export default App;
