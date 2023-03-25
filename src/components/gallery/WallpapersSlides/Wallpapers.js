import React from "react";
import { useNavigate } from "react-router-dom";
import { wallpaperList } from "./wallpaperArray";

const Wallpapers = () => {
  const navigate = useNavigate();

  const photosList = wallpaperList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => navigate("/ourworks/gallery/wallpapers-slide")}
    />
  ));
  return (
    <section className="gallery-section">
      <h1 className="display-1">Wallpapers</h1>
      <div className="photos-group">{photosList}</div>
    </section>
  );
};

export default Wallpapers;
