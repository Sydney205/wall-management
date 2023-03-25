import React from "react";
import Navbar from '../Navbar';
import { useNavigate } from "react-router-dom";
import { FaImages } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Album = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <section className="album-section">
      <MdCancel className="cancel-icon" onClick={() => navigate(-1)}/>
      <h1>
        <FaImages /><br />
        Welcome to our Gallery
      </h1>
      <div className="img-grid">
        <div className="img-group" onClick={() => navigate('/ourworks/gallery/allphotos')}>
          <img src={`${process.env.PUBLIC_URL}/images/gal83.jpg`} alt="ask" />
          <div className="img-tag">All Photos</div>
        </div>
        <div className="img-group" onClick={() => navigate('/ourworks/gallery/buildings')}>
          <img src={`${process.env.PUBLIC_URL}/images/gal2.jpg`} alt="ask" />
          <div className="img-tag">Buildings</div>
        </div>
        <div className="img-group" onClick={() => navigate('/ourworks/gallery/stoneworks')}>
          <img src={`${process.env.PUBLIC_URL}/images/gal3.jpg`} alt="ask" />
          <div className="img-tag">Stone works</div>
        </div>
        <div className="img-group" onClick={() => navigate('/ourworks/gallery/paintings')}>
          <img src={`${process.env.PUBLIC_URL}/images/gal7.jpg`} alt="ask" />
          <div className="img-tag">Painting works</div>
        </div>
        <div className="img-group" onClick={() => navigate('/ourworks/gallery/kitchen-setup')}>
          <img src={`${process.env.PUBLIC_URL}/images/gal5.jpg`} alt="ask" />
          <div className="img-tag">Kitchen Setup</div>
        </div>
        <div className="img-group" onClick={() => navigate('/ourworks/gallery/curtains')}>
          <img src={`${process.env.PUBLIC_URL}/images/gal67.jpg`} alt="ask" />
          <div className="img-tag">Curtains</div>
        </div>
        <div className="img-group" onClick={() => navigate('/ourworks/gallery/interior-designs')}>
          <img src={`${process.env.PUBLIC_URL}/images/gal66.jpg`} alt="ask" />
          <div className="img-tag">Interior design</div>
        </div>
        <div className="img-group" onClick={() => navigate('/ourworks/gallery/wallpapers')}>
          <img src={`${process.env.PUBLIC_URL}/images/gal50.jpg`} alt="ask" />
          <div className="img-tag">Wallpapers</div>
        </div>
        <div className="img-group" onClick={() => navigate('/ourworks/gallery/plumbing-materials')}>
          <img src={`${process.env.PUBLIC_URL}/images/gal18.jpg`} alt="ask" />
          <div className="img-tag">Plumbing Materials</div>
        </div>
        <div className="img-group" onClick={() => navigate('/ourworks/gallery/deco')}>
          <img src={`${process.env.PUBLIC_URL}/images/gal13.jpg`} alt="ask" />
          <div className="img-tag">Deco</div>
        </div>
        <div className="img-group" onClick={() => navigate('/ourworks/gallery/others')}>
          <img src={`${process.env.PUBLIC_URL}/images/gal15.jpg`} alt="ask" />
          <div className="img-tag">Others</div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Album;
