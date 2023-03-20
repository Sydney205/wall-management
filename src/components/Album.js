import React from "react";
import { useNavigate } from "react-router-dom";
import { FaImages } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Album = () => {
  const navigate = useNavigate();
  return (
    <section className="album-section">
      <MdCancel className="cancel-icon" onClick={() => navigate(-1)}/>
      <h1>
        <FaImages />
        Welcome to our Gallery
      </h1>
      <div className="img-grid">
        <div className="img-group">
          <img src={`${process.env.PUBLIC_URL}/images/gal3.jpg`} alt="ask" />
          <div className="img-tag">Stone works</div>
        </div>
        <div className="img-group">
          <img src={`${process.env.PUBLIC_URL}/images/gal7.jpg`} alt="ask" />
          <div className="img-tag">Painting works</div>
        </div>
        <div className="img-group">
          <img src={`${process.env.PUBLIC_URL}/images/gal5.jpg`} alt="ask" />
          <div className="img-tag">Kitchen Setup</div>
        </div>
        <div className="img-group">
          <img src={`${process.env.PUBLIC_URL}/images/gal13.jpg`} alt="ask" />
          <div className="img-tag">Deco</div>
        </div>
        <div className="img-group">
          <img src={`${process.env.PUBLIC_URL}/images/gal15.jpg`} alt="ask" />
          <div className="img-tag">Curtains</div>
        </div>
        <div className="img-group">
          <img src={`${process.env.PUBLIC_URL}/images/picture.jpg`} alt="ask" />
          <div className="img-tag">Interior design</div>
        </div>
        <div className="img-group">
          <img src={`${process.env.PUBLIC_URL}/images/gal18.jpg`} alt="ask" />
          <div className="img-tag">Tools</div>
        </div>
      </div>
    </section>
  );
};

export default Album;
