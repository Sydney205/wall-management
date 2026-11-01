import React from "react";
import { paintingList } from "./paintingArray";
import { useNavigate } from "../../../lib/router-compat";

const PaintingGal = ({scrollToTop}) => {
  const navigate = useNavigate();

  const photosList = paintingList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => {
        navigate("/ourworks/gallery/painting-slide")
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

export default PaintingGal;
