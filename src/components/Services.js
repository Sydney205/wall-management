import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaHammer, FaPrint, FaChevronRight } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { useNavigate } from "../lib/router-compat";

const Services = ({ scrollToTop }) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="services-section">
        <div className="welcome-header">
          <h1 className="display-3">Our <span style={{color: 'orange'}}>services</span></h1>
        </div>

        {/* <h1
          className="display-1 text-center"
          style={{
            fontWeight: "bold",
            color: "var(--purple)",
            marginBottom: "3rem",
            textDecoration: "underline",
          }}
        >
          What we do
        </h1> */}

        <div className="building-works">
          <div className="part1">
            <h2 color="var(--dark-blue)" className="display-3">
              {" "}
              <FaHammer color="var(--orange)" /> BUILDING{" "}
              <span style={{ color: "var(--orange)" }}>WORKS</span>
            </h2>
            <p style={{ fontSize: "25px" }}>
              What we do on buildings...
              <br />
              <span
                style={{ fontStyle: "italic", fontSize: "1rem", color: "gray" }}
              >
                Exterior/Interior
              </span>
            </p>

            <ul>
              <li>GENERAL OFFICE INNOVATION/RENOVATIONS</li>
              <li>3D WORKS (FLOORING, RUFFING, PANEL)</li>
              <li>DESIGN/SCULPTURAL WORKS</li>
              <li>BRICKS LAYING</li>
              <li>POP/SCREEDING</li>
              <li>PAINTINGS</li>
              <li>STONE DESIGN</li>
              <li>FURNITURE WORKS</li>
              <li>ELECTRICAL WORKS</li>
              <li>ALUMINUIM CONSTRUCTION/PARTITIONING</li>
              <li>PLUMBING WORKS</li>
              <li>TILE SETTING</li>
              <li>MAINTENANCE</li>
            </ul>
          </div>
        </div>

        <div className="branding-works">
          <h3
            style={{
              fontStyle: "italic",
              color: "var(--orange)",
              fontWeight: "bold",
              marginTop: "4rem",
              fontSize: "1.5rem",
              width: "60vw",
              textAlign: "center",
            }}
          >
            We are not LIMITED on building alone not because of profit BUT
            experience, Though profit is involved but profile is better.
          </h3>
          <div className="part2">
            <h2 className="display-3 text-center">
              <FaPrint color="var(--orange)" /> WALL MANAGEMENT <br />
              <span style={{ color: "var(--orange)" }}>PRINTS</span>
            </h2>
            <p>
              We base on any kind of printing on any platform/format at large.
            </p>
            <ul>
              <li>BRANDING</li>
              <li>SIGN BOARD/BILLBOARDS</li>
              <li>VISUAL WORKS</li>
              <li>DESIGN LOGO</li>
              <li>BANNERS</li>
              <li>BUSINESS CARDS</li>
              <li>IDENTITY CARDS</li>
              <li>INVITATION CARDS</li>
              <li>BOOKS FOR PROGRAMS</li>
              <li>LETTER-HEAD. e.t.c.</li>
            </ul>
          </div>
        </div>
        <div className="building-works">
          <div className="part1">
            <div className="heading-logo">
              <div className="line"></div>
              <MdPeople size={"3rem"} color="var(--dark-blue)" />
              <div className="line"></div>
            </div>
            <h1 className="display-2 text-center">
              <span>Our </span>
              <span>Clients</span>
            </h1>
            <p>Private and Public Organizations</p>
            <ul>
              <li>SONNEX PACKAGING COMPANY NIG.</li>
              <li>SOMOTEX NIGERIA LIMITED</li>
              <li>MONTANA NIGERIA INDUSTRIES</li>
              <li>HERMS RESOURCES</li>
              <li>INDOMIE NOODLES</li>
              <li>ISOLOG PRIVATE SCHOOL</li>
              <li>LEAD FORTH GATE PRIVATE SCHOOL</li>
              <li>LAST PLANE CHURCH</li>
            </ul>
          </div>
        </div>

        <button
          onClick={() => {
            navigate("/ourworks");
            scrollToTop();
          }}
        >
          Our works <FaChevronRight />
        </button>
      </section>
      <Footer />
    </>
  );
};

export default Services;
