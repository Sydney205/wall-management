import React from "react";
import { interiorList } from "./interiorArray";

const InteriorNav = ({ setImageIndex }) => {
  const photosList = interiorList.map((item, index) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => setImageIndex(index)}
    />
  ));
  return <section className="slide-nav">{photosList}</section>;
};

export default InteriorNav;
