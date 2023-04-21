import React from "react";
import { stoneList } from "./stoneArray";
import { useNavigate } from "react-router-dom";

const StoneGal = ({scrollToTop}) => {
  const navigate = useNavigate();

  const photosList = stoneList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => {
        navigate("/ourworks/gallery/stoneworks-slide")
        scrollToTop();
      }}
    />
  ));

  return (
    <div
      className="three-gal">
      {photosList}
    </div>
  );
};

export default StoneGal;
