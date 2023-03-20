import React, { useState } from "react";
import SlideNav from "./SlideNav";
// import TinyLogo from "./TinyLogo";
import { FaChevronRight, FaChevronLeft, FaRegImages } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const slideRoutes = [
    "/images/gal2.jpg",
    "/images/gal16.jpg",
    "/images/gal17.jpg",
    "/images/gal23.jpg",
    "/images/gal26.jpg",
    "/images/gal1.jpg",
    "/images/gal7.jpg",
    "/images/gal6.jpg",
    "/images/gal8.jpg",
    "/images/gal29.jpg",
    "/images/gal10.jpg",
    "/images/gal3.jpg",
    "/images/gal5.jpg",
    "/images/gal19.jpg",
    "/images/gal30.jpg",
    "/images/gal31.jpg",
    "/images/gal4.jpg",
    "/images/gal11.jpg",
    "/images/gal12.jpg",
    "/images/gal13.jpg",
    "/images/gal14.jpg",
    "/images/gal15.jpg",
    "/images/gal18.jpg",
    "/images/gal28.jpg",
    "/images/gal20.jpg",
    "/images/gal21.jpg",
    "/images/gal22.jpg",
    "/images/gal24.jpg",
    "/images/gal25.jpg",
    "/images/gal27.jpg",
    "/images/gal28.jpg",
    "/images/gal29.jpg",
    "/images/gal30.jpg",
    "/images/gal31.jpg",
    "/images/gal32.jpg",
    "/images/gal33.jpg",
    "/images/gal34.jpg",
  ];

  const slideRight = () => {
    setImageIndex(imageIndex + 1);
    if (imageIndex === 29) {
      setImageIndex(0);
    }
  };

  const slideLeft = () => {
    setImageIndex(imageIndex - 1);
    if (imageIndex === 0) {
      setImageIndex(29);
    }
  };

  // styles
  const slideFrame = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--nav-dark)",
    padding: "5em 0 3em 0",
    color: "white",
  };

  const bigFrame = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60vw",
    height: "60vh",
    border: "none",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "5rem",
  };

  return (
    <section className="slide-frame" style={slideFrame}>
      {/* <TinyLogo /> */}
      <FaRegImages size={"3rem"} color="var(--orange)" />
      <h1 color="white">
        Welcome to our <span color="var(--orange)">gallery</span>
      </h1>
      <div className="left-arrow-container">
        <FaChevronLeft
          className="left-arrow-icon"
          size={"2rem"}
          color="var(--white)"
          onClick={slideLeft}
        />
      </div>
      <div className="right-arrow-container">
        <FaChevronRight
          className="right-arrow-icon"
          size={"2rem"}
          color="var(--white)"
          onClick={slideRight}
        />
      </div>
      <div className="big-frame" style={bigFrame}>
        <img
          src={process.env.PUBLIC_URL + `${slideRoutes[imageIndex]}`}
          alt="ask"
        />
      </div>

      <SlideNav slideRoutes={slideRoutes} setImageIndex={setImageIndex} />

      <HashLink
        to="/#home-section"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          marginTop: "3rem",
          fontSize: "1.5rem",
        }}
      >
        <FaChevronLeft /> Continue to site
      </HashLink>
    </section>
  );
};

export default Slider;
