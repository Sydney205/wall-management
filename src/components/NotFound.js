import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <>
      <div>NotFound</div>
      <Link to="/" ><FaArrowLeft />{" "}Go Back</Link>
    </>
  );
};

export default NotFound;
