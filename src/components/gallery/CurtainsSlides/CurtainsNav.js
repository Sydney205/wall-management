import React from "react";
import { curtainList } from "./curtainArray";

const CurtainsNav = ({ setImageIndex }) => {
  const photosList = curtainList.map((item, index) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => setImageIndex(index)}
    />
  ));

  return <section className="slide-nav">{photosList}</section>;
};

export default CurtainsNav;
