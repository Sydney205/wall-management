import React, { useState } from "react";
import { interiorList } from "./interiorArray";
import { FaChevronRight, FaChevronLeft, FaRegImages } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import InteriorNav from "./InteriorNav";

const InteriorSlide = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const slideRight = () => {
    setImageIndex(imageIndex + 1);
    if (imageIndex === 9) {
      setImageIndex(0);
    }
  };

  const slideLeft = () => {
    setImageIndex(imageIndex - 1);
    if (imageIndex === 0) {
      setImageIndex(9);
    }
  };

  const mainPhoto = (
    <img
      key={interiorList[imageIndex].id}
      src={interiorList[imageIndex].route}
      alt={interiorList[imageIndex].desc}
    />
  );

  // styles
  const slideFrame = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--nav-dark)",
    padding: "2rem 0 1rem 0",
    color: "white",
  };

  const bigFrame = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90vw",
    height: "60vh",
    border: "none",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "2rem",
  };

  return (
    <section className="slide-frame" style={slideFrame}>
      <FaRegImages size={"3rem"} color="var(--orange)" />

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
        {mainPhoto}
      </div>
      <InteriorNav setImageIndex={setImageIndex} />

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

export default InteriorSlide;
