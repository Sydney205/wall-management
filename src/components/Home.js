import React from "react";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import GraphicsLogo from "./GraphicsLogo";
import Typed from "react-typed";

const Home = () => {
  return (
    <>
      <GraphicsLogo />

      <section className="home-section" id="home-section">
        <div>
          <h1 className="display-1">
            Wall
            <br />
            <span className="h12">Management</span>
          </h1>
          <Typed
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              color: "gray !important",
            }}
            className="typed-text"
            strings={[
              "Building and Branding",
              "Innovation and Renovation",
              "Exterior and Interior Designing",
              "We Manage the walls...",
            ]}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>
      </section>
      <div className="line2-div">
        <p>Wall Management</p>
        <div className="line-2"></div>
        <FaFacebookSquare size={"2rem"} className="line-icon" />
        <FaWhatsapp size={"2rem"} className="line-icon" />
        <MdEmail size={"2rem"} className="line-icon" />
      </div>
    </>
  );
};

export default Home;
