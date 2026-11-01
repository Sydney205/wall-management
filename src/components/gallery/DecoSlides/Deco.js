import React from "react";
import { decoList } from "./decoArray";
import { useNavigate } from "../../../lib/router-compat";

const Deco = () => {
  const navigate = useNavigate();

  const photosList = decoList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => navigate("/ourworks/gallery/deco-slide")}
    />
  ));

  return (
    <section className="gallery-section">
      <h1 className="display-1">Deco</h1>
      <div className="photos-group">{photosList}</div>
    </section>
  );
};

export default Deco;
