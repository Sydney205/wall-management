import React from "react";
import { kitchenArray } from "./kitchenArray";
import { useNavigate } from "../../../lib/router-compat";

const KitchenGal = ({scrollToTop}) => {
  const navigate = useNavigate();

  const photosList = kitchenArray.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => {
        navigate("/ourworks/gallery/kitchen-slide");
        scrollToTop();
    }}
    />
  ));

  return (
    <div
      className="three-gal">
      {photosList}
    </div>
  );
};

export default KitchenGal;
