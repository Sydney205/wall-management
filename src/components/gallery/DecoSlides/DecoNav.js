import React from "react";
import { decoList } from "./decoArray";

const DecoNav = ({ setImageIndex }) => {
  const photosList = decoList.map((item, index) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => setImageIndex(index)}
    />
  ));

  return <section className="slide-nav">{photosList}</section>;
};

export default DecoNav;
