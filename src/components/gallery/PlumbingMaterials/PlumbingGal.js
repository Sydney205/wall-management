import React from "react";
import { plumbingList } from "./plumbingArray";
import { useNavigate } from "react-router-dom";

const PlumbingGal = ({scrollToTop}) => {
  const navigate = useNavigate()

  const photosList = plumbingList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => {
        navigate("/ourworks/gallery/plumbing-materials-slide")
        scrollToTop();
    }}
    />
  ));

  return <div className="gallery">{photosList}</div>;
};


export default PlumbingGal;