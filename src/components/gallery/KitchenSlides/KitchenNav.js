import React from "react";
import { kitchenArray } from "./kitchenArray";

const KitchenNav = ({ setImageIndex }) => {
  const photosList = kitchenArray.map((item, index) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => setImageIndex(index)}
    />
  ));

  return <section className="slide-nav">{photosList}</section>;
};

export default KitchenNav;
