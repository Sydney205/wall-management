import React, { useState } from "react";
// import { NavHashLink } from "react-router-hash-link";
import {
  FaBars,
  FaHome,
  FaPhoneVolume,
  FaRegImages,
  FaThumbsUp,
  FaHammer,
} from "react-icons/fa";
import { MdCancel, MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ scrollToTop }) => {
  const navigate = useNavigate();

  const [boxShadow, setBoxShadow] = useState("none");
  const [sidebarIcon, setSidebarIcon] = useState(<FaBars />);
  const [sidebarHeight, setSidebarHeight] = useState("-100%");
  const [num, setNum] = useState(1);

  const openSidebar = () => {
    if (num === 1) {
      setSidebarIcon(<MdCancel />);
      setSidebarHeight("0%");
      setNum(2);
      setBoxShadow("0 0 20px #000");
    } else {
      setSidebarHeight("-100%");
      setSidebarIcon(<FaBars />);
      setNum(1);
      setBoxShadow("none");
    }
  };

  const onMobileLinkClicked = () => {
    setSidebarHeight("-100%");
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
        id="nav"
        style={{ boxShadow: boxShadow }}
      >
        <img
          src={process.env.PUBLIC_URL + "/wallM-logo.png"}
          alt="Profile-pic"
          className="site-logo"
          onClick={() => navigate("/")}
        />
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link active" onClick={navLinkCLicked}>
              Home
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
            <Link to="/ourworks" className="nav-link" onClick={navLinkCLicked}>
              Our works
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
            <FaRegImages /> Gallery
          </Link>
          <Link to="#" className="call-link">
            <FaPhoneVolume size={"1.5rem"} />
            Call Us
          </Link>
        </div>
        <div onClick={openSidebar} className="sidebar-btn">
          {sidebarIcon}
        </div>
      </nav>

      {/* Sidebar */}

      <div className="sidebar" style={{ left: sidebarHeight }}>
        <ul style={{ left: sidebarHeight }}>
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
              to="/why-choose-us"
              className="nav-link"
              onClick={onMobileLinkClicked}
            >
              <FaThumbsUp /> Why choose us
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
              <FaRegImages /> Gallery
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link" onClick={onMobileLinkClicked}>
              <FaPhoneVolume /> Call us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
