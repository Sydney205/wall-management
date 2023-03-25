import React from "react";
import { allPhotosList } from "./allPhotosArray";
import { useNavigate } from "react-router-dom";

const AllPhotos = () => {
  const navigate = useNavigate();

  const photosList = allPhotosList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => {
        navigate("/ourworks/gallery/allphotos-slide");
      }}
    />
  ));

  return (
    <section className="gallery-section">
      <h1 className="display-1">All images</h1>
      <div className="photos-group">{photosList}</div>
    </section>
  );
};

export default AllPhotos;
