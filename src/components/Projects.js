import React from "react";
import Navbar from "./Navbar";
import TinyLogo from "./TinyLogo";
import { FaPrint, FaHammer, FaChevronRight, FaImages } from "react-icons/fa";
import { MdEmail, MdPeople } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";

const Projects = ({scrollToTop}) => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate('/contact');
    scrollToTop();
  }

  return (
    <>
      <Navbar />
      <section className="projects-section" id="projects-section">
        <div className="header-text">
          <TinyLogo logoColor="var(--bg-white)" />
          <h1 className="display-5">Our Works</h1>
        </div>

        <img src={`${process.env.PUBLIC_URL}/images/Animated Images/building-construction.png`} alt='building construction' id='building-animated-img'/>

        <div className="building-works">
          <div className="part1">
            <h2 color="var(--dark-blue)" className="display-3">
              {" "}
              <FaHammer color="var(--orange)" /> BUILDING{" "}
              <span style={{ color: "var(--orange)" }}>WORKS</span>
            </h2>
            <p style={{fontSize: '25px'}}>
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
              <li>CONSULTING</li>
              <li>MAINTENANCE</li>
            </ul>
          </div>
        </div>

        <div className="heading-logo">
          <div className="line"></div>
          <FaImages size={"3rem"} color="var(--dark-blue)" />
          <div className="line"></div>
        </div>
        <h1 className="display-2">
          <span>Our </span>
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
          Check out our Gallery
        </p>
        <div className="gallery">
          <img src={process.env.PUBLIC_URL + "/images/gal2.jpg"} alt="gal1" />
          <img src={process.env.PUBLIC_URL + "/images/gal11.jpg"} alt="gal2" />
          <img src={process.env.PUBLIC_URL + "/images/gal23.jpg"} alt="gal3" />
          <img src={process.env.PUBLIC_URL + "/images/gal1.jpg"} alt="gal4" />
          <img src={process.env.PUBLIC_URL + "/images/gal17.jpg"} alt="gal5" />
          <img src={process.env.PUBLIC_URL + "/images/gal20.jpg"} alt="gal6" />
          <img src={process.env.PUBLIC_URL + "/images/gal21.jpg"} alt="gal7" />
          <img src={process.env.PUBLIC_URL + "/images/gal25.jpg"} alt="gal8" />
        </div>
        <Link
          className="view-more"
          to="/ourworks/gallery"
          style={{
            marginTop: "2rem",
            background: "var(--nav-dark)",
            border: "2px solid var(--nav-dark)",
            textDecoration: "none",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          View Gallery <FaChevronRight />
        </Link>

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

          <p style={{color: 'var(--orange)', fontSize: '1.2rem', width: '50vw', textAlign: 'center'}}>
            Hence we look forward to your positive responce to establishing a
            mutually business relationship with you.
          </p>
        </div>
        <button onClick={nextPage}>
          <MdEmail /> Contact Us <FaChevronRight />
        </button>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
