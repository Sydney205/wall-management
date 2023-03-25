import React from "react";
import { interiorList } from "./interiorArray";
import { useNavigate } from "react-router-dom";

const Interior = () => {
  const navigate = useNavigate();

  const photosList = interiorList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => navigate("/ourworks/gallery/interior-slide")}
    />
  ));

  return (
    <section className="gallery-section">
      <h1 className="display-1">Interior Designs</h1>
      <div className="photos-group">{photosList}</div>
    </section>
  );
};

export default Interior;
