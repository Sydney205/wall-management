import React from "react";
import { stoneList } from "./stoneArray";

const StoneWorkNav = ({ setImageIndex }) => {
  const photosList = stoneList.map((item, index) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => setImageIndex(index)}
    />
  ));

  return <section className="slide-nav">{photosList}</section>;
};

export default StoneWorkNav;
