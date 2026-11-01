import React, { useState, useEffect } from "react";
// import { NavHashLink } from "../lib/router-compat";
import {
  FaBars,
  FaHome,
  FaBuilding,
  FaPhoneVolume,
  FaFacebook,
  FaThumbsUp,
  FaHammer,
} from "react-icons/fa";
import { MdCancel, MdContactSupport, MdEmail } from "react-icons/md";
import { Link, useNavigate } from "../lib/router-compat";

const Navbar = ({ scrollToTop }) => {
  const navigate = useNavigate();

  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [navState, setNavState] = useState("trans_nav");
  const [siteLogo, setSiteLogo] = useState("light-logo");

  useEffect(() => {
    const changeColor = () => {
      const scrolled = window.scrollY >= 5 || sidebarOpened;
      setNavState(scrolled ? "nav" : "trans_nav");
      setSiteLogo(scrolled ? "dark-logo" : "light-logo");
    };
    changeColor();
    window.addEventListener("scroll", changeColor, { passive: true });
    return () => window.removeEventListener("scroll", changeColor);
  }, [sidebarOpened]);

  const openSidebar = () => {
    setSidebarOpened((opened) => !opened);
  };

  const onMobileLinkClicked = () => {
    setSidebarOpened(false);
    if (scrollToTop) scrollToTop();
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinkCLicked = () => {
    if (scrollToTop) scrollToTop();
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 justify-content-center"
        id={navState}
      >
        <div id={siteLogo} onClick={() => navigate("/")}></div>
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link active" onClick={navLinkCLicked}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link active"
              onClick={navLinkCLicked}
            >
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-link active"
              onClick={navLinkCLicked}
            >
              Our Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ourworks" className="nav-link" onClick={navLinkCLicked}>
              Our works
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/why-choose-us"
              className="nav-link"
              onClick={navLinkCLicked}
            >
              Why Choose us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={navLinkCLicked}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div color="white" className="nav-contact">
          <Link to="/ourworks/gallery" className="gallery-link">
            <FaFacebook /> Follow us{" "}
          </Link>
          <a
            href="tel:07033926060"
            target={"_blank"}
            rel={"noreferrer"}
            className="call-link"
          >
            <FaPhoneVolume size={"1.5rem"} />
            Make a call
          </a>
        </div>
        <button
          type="button"
          aria-label={sidebarOpened ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={sidebarOpened}
          onClick={openSidebar}
          className="sidebar-btn"
        >
          {sidebarOpened ? <MdCancel /> : <FaBars />}
        </button>
      </nav>

      {/* Sidebar */}

      <div className={`sidebar${sidebarOpened ? " is-open" : ""}`}>
        <ul>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link active"
              onClick={onMobileLinkClicked}
            >
              <FaHome /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
              onClick={onMobileLinkClicked}
            >
              <FaBuilding /> About us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-link"
              onClick={onMobileLinkClicked}
            >
              <MdContactSupport /> Our services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ourworks"
              className="nav-link"
              onClick={onMobileLinkClicked}
            >
              <FaHammer /> Our works
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/why-choose-us"
              className="nav-link"
              onClick={onMobileLinkClicked}
            >
              <FaThumbsUp /> Why choose us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
              onClick={onMobileLinkClicked}
            >
              <MdEmail /> Contact us
            </Link>
          </li>

          {/* Gallery and Call Button */}

          <li>
            <Link
              to="/ourworks/gallery"
              className="nav-link"
              onClick={onMobileLinkClicked}
            >
              <FaFacebook /> Follow us
            </Link>
          </li>
          <li>
            <a
              href="tel:07033926060"
              target={"_blank"}
              rel={"noreferrer"}
              className="nav-link"
              onClick={onMobileLinkClicked}
            >
              <FaPhoneVolume size={"1.5rem"} />
              Make a call
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
