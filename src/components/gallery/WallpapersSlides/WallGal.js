import React from "react";
import { wallpaperList } from "./wallpaperArray";
import { useNavigate } from "react-router-dom";

const WallGal = () => {
  const navigate = useNavigate();

  const photosList = wallpaperList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => navigate("/ourworks/gallery/buildings-slide")}
    />
  ));

  return <div className="gallery">{photosList}</div>;
};


export default WallGal;