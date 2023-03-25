import React from "react";
import { allPhotosList } from './allPhotosArray'

const AllPhotosNav = ({ setImageIndex }) => {
  const photosList = allPhotosList.map((item, index) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => setImageIndex(index)}
    />
  ));
  return <div className="slide-nav">{photosList}</div>;
};

export default AllPhotosNav;
