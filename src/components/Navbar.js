import React, { useState } from "react";
// import { NavHashLink } from "react-router-hash-link";
import { FaBars, FaPhoneVolume, FaRegImages } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [boxShadow, setBoxShadow] = useState("");
  const [sidebarIcon, setSidebarIcon] = useState(<FaBars />);
  const [sidebarHeight, setSidebarHeight] = useState("-100%");
  const [num, setNum] = useState(1);

  const openSidebar = () => {
    if (num === 1) {
      setSidebarIcon(<MdCancel />);
      setSidebarHeight("0%");
      setNum(2);
      setBoxShadow("none");
    } else {
      setSidebarHeight("-100%");
      setSidebarIcon(<FaBars />);
      setNum(1);
      setBoxShadow("");
    }
  };

  const onLinkClicked = () => {
    setSidebarHeight("-100%");
    setSidebarIcon(<FaBars />);
    setNum(1);
    setBoxShadow("");
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
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/why-choose-us" className="nav-link">
              Why Choose us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ourworks" className="nav-link">
              Our works
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
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

      <div className="sidebar" style={{ top: sidebarHeight }}>
        <ul style={{ height: sidebarHeight }}>
          <li className="nav-item">
            <Link to="/" className="nav-link active" onClick={onLinkClicked}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ourworks" className="nav-link" onClick={onLinkClicked}>
              works
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ourworks/gallery"
              className="nav-link"
              onClick={onLinkClicked}
            >
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={onLinkClicked}>
              Contact us
            </Link>
          </li>
        </ul>
        <div className="nav-icons"></div>
      </div>
    </>
  );
};

export default Navbar;
