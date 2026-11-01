import React from "react";
import { useNavigate } from "../../../lib/router-compat";
import { buildingList } from "./buildingsArray";

const Buildings = () => {
  const navigate = useNavigate();

  const photosList = buildingList.map((item, index) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => navigate("/ourworks/gallery/buildings-slide")}
    />
  ));

  return (
    <section className="gallery-section">
      <h1 className="display-1">Buildings</h1>
      <div className="photos-group">{photosList}</div>
    </section>
  );
};

export default Buildings;
