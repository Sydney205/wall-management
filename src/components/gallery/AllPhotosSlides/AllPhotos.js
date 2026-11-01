import React from "react";
import { buildingList } from "../BuildingSlides/buildingsArray";
import { paintingList } from "../PaintingSlides/paintingArray";
import { useNavigate } from "../../../lib/router-compat";

const AllPhotos = () => {
  const navigate = useNavigate();

  const Building = buildingList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => {
        navigate("/ourworks/gallery/allphotos-slide");
      }}
    />
  ));

  const painting = paintingList.map((item) => (
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

      <h3>Building Works</h3>
      <div className="photos-group">{Building}</div>
      <h3>Paintings</h3>
      <div className="photos-group">{painting}</div>
    </section>
  );
};

export default AllPhotos;
