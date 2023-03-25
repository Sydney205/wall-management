import React from "react";
import { buildingList } from "./buildingsArray";

const BuildingNav = ({ setImageIndex }) => {
  const photosList = buildingList.map((item, index) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => setImageIndex(index)}
    />
  ));

  return <section className="slide-nav">{photosList}</section>;
};

export default BuildingNav;
