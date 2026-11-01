import React from "react";
import { useNavigate } from "../../../lib/router-compat";

const NewInterior = () => {
  const navigate = useNavigate();

  return (
    <section className="album-section">
      <div
        onClick={() => navigate("/ourworks/gallery/stoneworks")}
        style={{
          width: "25vw",
          height: "40vh",
        }}
      >
        <img
          src={`/images/gal45.jpg`}
          alt="ask"
          style={{
            width: "100%",
            height: "100%",
            borderTopRightRadius: "5px !important",
            borderTopLeftRadius: "5px !important",
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
          }}
        />
        <div
          className="img-tag"
          style={{
            background: "var(--dark-blue)",
            color: "white",
          }}
        >
          Interior Design
        </div>
      </div>
      <div
        className="img-group"
        onClick={() => navigate("/ourworks/gallery/stoneworks")}
      >
        <img src={`/images/gal74.jpg`} alt="ask" />
        <div className="img-tag">Wallpapers</div>
      </div>
      <div
        className="img-group"
        onClick={() => navigate("/ourworks/gallery/stoneworks")}
      >
        <img src={`/images/gal67.jpg`} alt="ask" />
        <div className="img-tag">Curtains</div>
      </div>
    </section>
  );
};

export default NewInterior;
