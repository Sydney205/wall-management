import React, { useState } from "react";
import BuildingNav from "./BuildingNav";
import { FaChevronRight, FaChevronLeft, FaRegImages } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link'

const Buildings = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const slideRoutes = [
    "/images/gal2.jpg",
    "/images/gal11.jpg",
    "/images/gal16.jpg",
    "/images/gal17.jpg",
    "/images/gal20.jpg",
    "/images/gal21.jpg",
    "/images/gal22.jpg",
    "/images/gal23.jpg",
    "/images/gal24.jpg",
    "/images/gal25.jpg",
    "/images/gal26.jpg",
    "/images/gal27.jpg",
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
      <BuildingNav slideRoutes={slideRoutes} setImageIndex={setImageIndex} />


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

export default Buildings;
