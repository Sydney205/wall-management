import React, { useState } from "react";
import { paintingList } from "./paintingArray";
import { FaChevronRight, FaChevronLeft, FaArrowLeft } from "react-icons/fa";
import PaintingNav from "./PaintingNav";
import { useNavigate } from "../../../lib/router-compat";

const PaintingSlide = () => {
  const navigate = useNavigate();

  const [imageIndex, setImageIndex] = useState(0);

  const slideRight = () => {
    setImageIndex(imageIndex + 1);
    if (imageIndex === 3) {
      setImageIndex(0);
    }
  };

  const slideLeft = () => {
    setImageIndex(imageIndex - 1);
    if (imageIndex === 0) {
      setImageIndex(3);
    }
  };

  const mainPhoto = (
    <img
      key={paintingList[imageIndex].id}
      src={paintingList[imageIndex].route}
      alt={paintingList[imageIndex].desc}
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
        className='cancel-icon'
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
      <PaintingNav setImageIndex={setImageIndex} />
    </section>
  );
};

export default PaintingSlide;
