import React from "react";
import { plumbingList } from "./plumbingArray";
import { useNavigate } from "react-router-dom";

const Plumbing = () => {
  const navigate = useNavigate();

  const photosList = plumbingList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => navigate("/ourworks/gallery/plumbing-materials-slide")}
    />
  ));
  return (
    <section className="gallery-section">
      <h1 className="display-1">Plumbing Materials</h1>
      <div className="photos-group">{photosList}</div>
    </section>
  );
};

export default Plumbing;
