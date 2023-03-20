import React from "react";
import Footer from "./Footer";
import About from "./Main page/About";
import Contact from "./Main page/Contact";
import Home from "./Main page/Home";
import Navbar from "./Navbar";
import Projects from './Main page/Projects'
import OurClient from "./Main page/OurClients";

function MainPage() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <OurClient /> */}
      <Contact />
      <Footer />
    </main>
  );
}

export default MainPage;
