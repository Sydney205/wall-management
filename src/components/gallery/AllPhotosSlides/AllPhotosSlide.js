import React, { useState } from "react";
import { useNavigate } from "../../../lib/router-compat";
import { allPhotosList } from "./allPhotosArray";
import AllPhotosNav from "./AllPhotosNav";
import {
  FaChevronRight,
  FaChevronLeft,
  FaArrowLeft,
} from "react-icons/fa";

const AllPhotosSlide = () => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);

  const slideRight = () => {
    setImageIndex(imageIndex + 1);
    if (imageIndex === 59) {
      setImageIndex(0);
    }
  };

  const slideLeft = () => {
    setImageIndex(imageIndex - 1);
    if (imageIndex === 0) {
      setImageIndex(59);
    }
  };

  const mainPhoto = (
    <img
      key={allPhotosList[imageIndex].id}
      src={allPhotosList[imageIndex].route}
      alt={allPhotosList[imageIndex].desc}
      style={{ width: "100%", height: "100%" }}
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
    <>
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
        <AllPhotosNav setImageIndex={setImageIndex} />
      </section>
    </>
  );
};

export default AllPhotosSlide;
