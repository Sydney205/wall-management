import React from "react";
import { stoneList } from "./stoneArray";
import { useNavigate } from "../../../lib/router-compat";

const StoneWorks = () => {
  const navigate = useNavigate();

  const photosList = stoneList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => navigate("/ourworks/gallery/stoneworks-slide")}
    />
  ));
  return (
    <section className="gallery-section">
      <h1 className="display-1">Stone works</h1>
      <div className="photos-group">{photosList}</div>
    </section>
  );
};

export default StoneWorks;
