import React, { useState, useEffect } from "react";
// import { NavHashLink } from "react-router-hash-link";
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
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ scrollToTop }) => {
  const navigate = useNavigate();

  const [boxShadow, setBoxShadow] = useState("none");
  const [sidebarIcon, setSidebarIcon] = useState(<FaBars />);
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [sidebarIconColor, setSidebarIconColor] = useState("white");
  const [num, setNum] = useState(1);
  const [navState, setNavState] = useState("trans_nav");
  const [siteLogo, setSiteLogo] = useState("light-logo");

  const changeColor = () => {
    if (window.scrollY >= 5) {
      setNavState("nav");
      setSiteLogo("dark-logo");
      setSidebarIconColor("var(--nav-dark)");
    } else if (sidebarOpened === true && window.scrollY < 5) {
      setNavState("nav");
      setSiteLogo("dark-logo");
      setSidebarIconColor("var(--nav-dark)");
    } else {
      setNavState("trans_nav");
      setSiteLogo("light-logo");
      setSidebarIconColor("white");
    }
  };

  useEffect(() => {
    changeColor();
    window.addEventListener("scroll", changeColor);
  });

  const openSidebar = () => {
    if (num === 1) {
      setSidebarIcon(<MdCancel />);
      setSidebarOpened(true);
      setNum(2);
      setBoxShadow("0 0 20px #000");
    } else {
      setSidebarOpened(false);
      setSidebarIcon(<FaBars />);
      setNum(1);
      setBoxShadow("none");
    }
  };

  const onMobileLinkClicked = () => {
    setSidebarOpened(false);
    setSidebarIcon(<FaBars />);
    setNum(1);
    setBoxShadow("");
    scrollToTop();
  };

  const navLinkCLicked = () => {
    scrollToTop();
  };

  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 justify-content-center"
        id={navState}
        style={{ boxShadow: boxShadow }}
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
        <div
          onClick={openSidebar}
          className="sidebar-btn"
          style={{ color: sidebarIconColor, borderColor: sidebarIconColor }}
        >
          {sidebarIcon}
        </div>
      </nav>

      {/* Sidebar */}

      <div
        className="sidebar"
        style={{
          left: `${!sidebarOpened ? "-100%" : "0%"}`,
          background: "white",
        }}
      >
        <ul style={{ left: `${!sidebarOpened ? "-100%" : "0%"}` }}>
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
              to="/gallery"
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
