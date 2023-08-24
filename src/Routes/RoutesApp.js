import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HomePage from "../pages/HomePage";
import AnimationNature from "../pages/activités/AnimationNature";
import AutourDuChien from "../pages/activités/AutourDuChien";
import MediationAnimal from "../pages/activités/MediationAnimal";
import QuiSommeNous from "../pages/QuiSommeNous";
import LesPublics from "../pages/infosPratiques/LesPublics";
import Contact from "../pages/infosPratiques/Contact";
import Tarifs from "../pages/infosPratiques/Tarifs";

export default function RoutesApp() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/AnimationNature" element={<AnimationNature />} />
        <Route exact path="/AutourDuChien" element={<AutourDuChien />} />
        <Route exact path="/MediationAnimal" element={<MediationAnimal />} />
        <Route exact path="/QuiSommeNous" element={<QuiSommeNous />} />
        <Route exact path="/LesPublics" element={<LesPublics />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Tarifs" element={<Tarifs />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
