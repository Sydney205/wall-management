import React from "react";
import { kitchenArray } from "./kitchenArray";
import { useNavigate } from "react-router-dom";

const Kitchen = () => {
  const navigate = useNavigate();

  const photosList = kitchenArray.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => navigate("/ourworks/gallery/kitchen-slide")}
    />
  ));
  return (
    <section className="gallery-section">
      <h1 className="display-1">Kitchen Setup and Tiling</h1>
      <div className="photos-group">{photosList}</div>
    </section>
  );
};

export default Kitchen;
