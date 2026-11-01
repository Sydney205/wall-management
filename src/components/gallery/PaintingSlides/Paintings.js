import React from "react";
import { paintingList } from "./paintingArray";
import { useNavigate } from "../../../lib/router-compat";

const Paintings = () => {
  const navigate = useNavigate();

  const photosList = paintingList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => navigate("/ourworks/gallery/painting-slide")}
    />
  ));
  return (
    <section className="gallery-section">
      <h1 className="display-1">Paintings</h1>
      <div className="photos-group">{photosList}</div>
    </section>
  );
};

export default Paintings;
