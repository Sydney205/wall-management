import React from "react";
import { paintingList } from "./paintingArray";

const PaintingNav = ({ setImageIndex }) => {
  const photosList = paintingList.map((item, index) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => setImageIndex(index)}
    />
  ));

  return <section className="slide-nav">{photosList}</section>;
};

export default PaintingNav;
