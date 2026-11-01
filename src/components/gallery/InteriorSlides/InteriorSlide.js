import React, { useState } from "react";
import { interiorList } from "./interiorArray";
import { FaChevronRight, FaChevronLeft, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "../../../lib/router-compat";
import InteriorNav from "./InteriorNav";

const InteriorSlide = () => {
  const navigate = useNavigate();

  const [imageIndex, setImageIndex] = useState(0);

  const slideRight = () => {
    setImageIndex(imageIndex + 1);
    if (imageIndex === 14) {
      setImageIndex(0);
    }
  };

  const slideLeft = () => {
    setImageIndex(imageIndex - 1);
    if (imageIndex === 0) {
      setImageIndex(14);
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
    maxWidth: "60vw",
    maxHeight: "80vh",
    border: "none",
    borderRadius: "10px",
    overflow: "hidden",
    // marginTop: "1rem",
  };

  return (
    <section className="slide-frame" style={slideFrame}>
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          transform: "scale(2)",
          color: "orange",
        }}
        className="cancel-icon"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft /> Back
      </div>
      {/* <FaRegImages size={"3rem"} color="var(--orange)" /> */}

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
    </section>
  );
};

export default InteriorSlide;
