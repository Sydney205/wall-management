import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";
import SlideNav from "./SlideNav";
import TinyLogo from "./TinyLogo";

const Album = () => {
  const navigate = useNavigate();

  return (
    <>
      <TinyLogo />
      <h1 color="white">
        Welcome to our <span color="var(--orange)">gallery</span>
      </h1>
      <Slider />
      <SlideNav />
      <button onClick={() => navigate("/")}>Continue to site</button>
    </>
  );
};

export default Album;
