import React from "react";
import Navbar from "./Navbar";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "../lib/router-compat";
import TinyLogo from "./TinyLogo";
import Footer from "./Footer";

const About = ({ scrollToTop }) => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/services");
    scrollToTop();
  };

  return (
    <>
      <Navbar />
      <section className="about-section" id="about-section">
        <div className="welcome-header">
          <h1 className="display-3">
            <span>About</span> us
          </h1>
        </div>

        <article className="who-we-are">
          <div className="heading-logo">
            <div className="line"></div>
            <TinyLogo />
            <div className="line"></div>
          </div>
          <h1 className="display-2">
            <span className="who">Who</span> we <span className="are">Are</span>
            ...
          </h1>

          <p className="header-text about-text">
            The aforementioned company formed by a group of professionals <br />
            is thrilled to lead a complex initiatives that brings promises and
            hope for those clients who desperately look for it.
          </p>

          <h3
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
              color: "var(--orange)",
            }}
            className="display-6"
          >
            Building & Branding
          </h3>
          <p className="about-text">
            WALL MANAGEMENT is built into two divisions Building & Branding as
            to cause excellent and effective services.
          </p>
          <p className="about-text">
            The Building aspect includes, Innovation and Renovation with every
            area of structural designs while, the Branding involves,
            Printing/Decorations/Sculptural works & Advertisement design/Visual
            works.{" "}
          </p>
        </article>
        <article>
          <div className="objectives-symbols">
            <div className="objectives">
              <p className="header-text">Building</p>
              <p>
                Building as a reason of shelter, caring for humanity within our
                communities therefore, we must consider WALL MANAGEMENT which
                involves teamwork and that's why we think of WALL MANAGEMENT
                because of we build and we brand with excellent.
              </p>
            </div>

            <div className="symbols">
              <p className="header-text">Branding</p>
              <p>
                Branding as one of the most valuable way of speaking and
                interpreting and aim and objective of the subject [PRODUCTS]
                need professional and creative finishing touches to drive home
                expected result, that is why we chose experience and
                multi-talented ones and resourceful advert officials with years
                of experience.{" "}
              </p>
            </div>
          </div>
        </article>
        <br />

        <button onClick={nextPage}>
          Our Services <FaChevronRight />
        </button>
      </section>
      <Footer />
    </>
  );
};

export default About;
