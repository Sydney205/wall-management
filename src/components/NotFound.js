import React from "react";
import { Link } from "../lib/router-compat";
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
