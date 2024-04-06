import React, { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Profile from "../components/Profile/Profile";

import "./App.css";

function App() {
  // Modal functions
  const [open, setOpen] = useState(false);
  const handleNavBar = useCallback(() => {
    setOpen(!open);
  }, []);
  const [activeModal, setActiveModal] = useState(null);
  const handleCloseModal = useCallback(() => {
    setActiveModal(null);
  }, []);
  const handleOpenModal = useCallback((modalName) => {
    setActiveModal(modalName);
  }, []);
  return (
    <div className="page">
      <div className="page_wrapper">
        <Header handleNavBar={handleNavBar} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
