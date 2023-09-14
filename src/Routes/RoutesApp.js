import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HomePage from "../pages/homePage/HomePage";
import AnimationNature from "../pages/animationNature/AnimationNature";
import AutourDuChien from "../pages/autourDuChien/AutourDuChien";
import MediationAnimal from "../pages/mediationAnimal/MediationAnimal";
import QuiSommeNous from "../pages/quiSommeNous/QuiSommeNous";
import LesPublics from "../pages/lesPublics/LesPublics";
import Contact from "../pages/contact/Contact";
import Tarifs from "../pages/tarifs/Tarifs";

export default function RoutesApp() {
  return (
    <React.Fragment>
      <ScrollToTop />
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
