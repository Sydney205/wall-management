import React, { useState } from "react";
import { buildingList } from "./buildingsArray";
import { useNavigate } from "../../../lib/router-compat";
import { FaChevronRight } from "react-icons/fa";

const BuildingGal = ({scrollToTop}) => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const photosList = buildingList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => {
        navigate("/ourworks/gallery/buildings-slide");
        scrollToTop();
    }}
    />
  ));

  return (
    <>
      <div className={!opened ? "gallery" : "full-gallery"}>{photosList}</div>

      <button
        className={!buttonClicked ? "view-more" : "offscreen"}
        onClick={() => {
          setButtonClicked(true);
          setOpened(true);
        }}
      >
        See more <FaChevronRight />
      </button>
    </>
  );
};

export default BuildingGal;
