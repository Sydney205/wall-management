import React from "react";
import { decoList } from "./decoArray";
import {useNavigate} from 'react-router-dom'

const DecoGal = ({scrollToTop}) => {
  const navigate = useNavigate();

  const photosList = decoList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => {
        navigate("/ourworks/gallery/deco-slide");
        scrollToTop();
    }}
    />
  ));

  return <div className='gallery'>{ photosList }</div>;
};


export default DecoGal;