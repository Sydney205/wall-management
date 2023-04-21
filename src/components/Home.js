import React from "react";
import GraphicsLogo from "./GraphicsLogo";
import Typed from "react-typed";

const Home = () => {
  return (
    <>
      <section className="new-home-section">
        <GraphicsLogo />
        <div className="home-line">
          <h1 className="display-1">
            Wall <span className="h12">Management</span>
          </h1>
          <br />
          <Typed
            style={{
              fontSize: "25px",
              color: "white !important",
            }}
            className="typed-text display-6 text-center"
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
      {/* <div className="line2-div">
         <p>Wall Management</p>
         <div className="line-2"></div>
         <FaFacebookSquare size={"2rem"} className="line-icon" />
         <FaWhatsapp size={"2rem"} className="line-icon" />
        <MdEmail size={"2rem"} className="line-icon" />
        </div>*/}
    </>
  );
};

export default Home;
