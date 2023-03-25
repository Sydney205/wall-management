import React from "react";
import { wallpaperList } from "./wallpaperArray";

const WallpapersNav = ({ setImageIndex }) => {
  const photosList = wallpaperList.map((item, index) => (
    <img
      key={item.id}
      src={item.desc}
      alt={item.desc}
      onClick={() => setImageIndex(index)}
    />
  ));

  return <section className="slide-nav">{photosList}</section>;
};

export default WallpapersNav;
