import React, { useState } from "react";
import { specialList } from "./specialArray";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const AllGal = ({scrollToTop}) => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const photosList = specialList.map((item) => (
    <img
      key={item.id}
      src={item.route}
      alt={item.desc}
      onClick={() => {
        navigate("/ourworks/gallery/allphotos-slide");
        scrollToTop();
      }}
    />
  ));

  return (
    <>
      <div
        className={!opened ? "gallery" : "full-gallery"}
        style={{ marginBottom: "3rem" }}
      >
        {photosList}
      </div>

      <button
        className="view-more"
        style={{
          background: "var(--nav-dark)",
          border: "2px solid var(--nav-dark)",
          textDecoration: "none",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "3rem",
        }}
        onClick={() => setOpened(true)}
      >
        See more <FaChevronRight />
      </button>
    </>
  );
};

export default AllGal;
