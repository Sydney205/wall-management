import React, { useEffect, useState } from "react";
import GraphicsLogo from "./GraphicsLogo";

const Home = () => {
  const messages = [
    "Building and Branding",
    "Innovation and Renovation",
    "Exterior and Interior Designing",
    "We manage the walls.",
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((index) => (index + 1) % messages.length);
    }, 2800);
    return () => window.clearInterval(interval);
  }, [messages.length]);

  return (
    <>
      <section className="new-home-section">
        <GraphicsLogo />
        <div className="home-line">
          <h1 className="display-1">
            Wall <span className="h12">Management</span>
          </h1>
          <br />
          <span className="typed-text display-6 text-center" aria-live="polite">
            {messages[messageIndex]}
          </span>
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
