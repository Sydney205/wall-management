import React from "react";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import TinyLogo from "./TinyLogo";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="rainbow-bottom">
        <div className="dark-blue-box"></div>
        <div className="light-blue-box"></div>
        <div className="white-blue-box"></div>
        <div className="dark-blue-box"></div>
        <div className="light-blue-box"></div>
        <div className="white-blue-box"></div>
        <div className="orange-box"></div>
      </div>
      <div className="footer-content">
        <div className="footer-header">
          <div className="heading-logo">
            <div className="line"></div>
            <TinyLogo />
            <div className="line"></div>
          </div>
          <h1>Wall Management</h1>
          <p style={{ color: "var(--orange)" }}>Building & Branding</p>
        </div>
        <div className='footer-nav'>
          <ul>
            <li>
              <NavHashLink to="#home-section">Home</NavHashLink>
            </li>
            <li>
              <div className="v-line"></div>
            </li>

            <li>
              <NavHashLink to="#about-section">About</NavHashLink>
            </li>
            <li>
              <div className="v-line"></div>
            </li>

            <li>
              <NavHashLink to="#unique-section">
                what makes us unique
              </NavHashLink>
            </li>
            <li>
              <div className="v-line"></div>
            </li>

            <li>
              <NavHashLink to="#projects-section">Our works</NavHashLink>
            </li>
            <li>
              <div className="v-line"></div>
            </li>
            <li>
              <NavHashLink to="#contact-section">Contact</NavHashLink>
            </li>
          </ul>
        </div>
        <div
          className="line"
          style={{
            width: "80vw",
            height: "1px",
            background: "var(--dim-white)",
            marginBottom: "1.5rem",
          }}
        ></div>
        <div
          className="office"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5 style={{ color: "var(--orange)", fontWeight: "bold" }}>
            COPERATE OFFICE
          </h5>
          <div style={{ display: "flex", gap: "1rem" }}>
            <p>
              <MdLocationPin /> 1, Joel Sholanke Street, Powerline Asese, Ogun state.
              Nigeria.{" "}
            </p>
            <p>
              <FaPhoneAlt /> 07033926060, 08028641303, 08180751888{" "}
            </p>
            <p>
              <MdEmail /> wallmanagement@yahoo.com
            </p>
          </div>
          <div>
            <h5>
              Follow us on <FaFacebookSquare />:  Wall management.
            </h5>
            
          </div>
        </div>
      </div>
      <br />
      <p className="copyright">Copyright &copy; Wall Management. ALL rights reserved 2023</p>
    </footer>
  );
};

export default Footer;
