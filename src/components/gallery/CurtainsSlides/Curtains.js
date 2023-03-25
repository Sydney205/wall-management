import React from "react";
import { curtainList } from "./curtainArray";
import { useNavigate } from "react-router-dom";

const Curtains = () => {
  const navigate = useNavigate();
  const photosList = curtainList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => navigate("/ourworks/gallery/curtain-slide")}
    />
  ));

  return (
    <section className="gallery-section">
      <h1 className="display-1">Modern Curtains</h1>
      <div className="photos-group">{photosList}</div>
    </section>
  );
};

export default Curtains;
