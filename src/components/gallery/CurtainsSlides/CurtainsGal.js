import React from "react";
import { curtainList } from "./curtainArray";
import { useNavigate } from "react-router-dom";

const CurtainsGal = ({scrollToTop}) => {
  const navigate = useNavigate();

  const photosList = curtainList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => {
        navigate("/ourworks/gallery/curtain-slide");
        scrollToTop()
    }}
    />
  ));

  return <div className='gallery'>{ photosList }</div>;
};


export default CurtainsGal;