import React from "react";
import Navbar from "./Navbar";
import TinyLogo from "./TinyLogo";
import Gallery from "./gallery/Gallery";
import { FaImages } from "react-icons/fa";
import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="projects-section" id="projects-section">
        <div className="header-text">
          <TinyLogo logoColor="var(--bg-white)" />
          <h1 className="display-1">
            Our <span style={{ color: "orange !important" }}>Works</span>
          </h1>
        </div>

        <div className="heading-logo">
          <div className="line"></div>
          <FaImages size={"3rem"} color="var(--dark-blue)" />
          <div className="line"></div>
        </div>
         <h1 className="display-2 gradient-h1">
            <span>Works </span>
            <span>Gallery</span>
          </h1>
        <p
          style={{
            fontStyle: "italic",
            color: "var(--orange)",
            fontWeight: "bold",
            marginTop: "1rem",
            fontSize: "1.5rem",
            width: "60vw",
            textAlign: "center",
          }}
        >
          Our works contains photos of works we've done and works we do...
        </p>
        <Gallery />
      </section>
      <Footer />
    </>
  );
};

export default Projects;
