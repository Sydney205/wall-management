import React from "react";
import { plumbingList } from "./plumbingArray";

const PlumbingNav = ({ setImageIndex }) => {
  const photosList = plumbingList.map((item, index) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => setImageIndex(index)}
    />
  ));
  return <section className="slide-nav">{photosList}</section>;
};

export default PlumbingNav;
