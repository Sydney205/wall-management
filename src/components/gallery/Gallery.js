import React, { useState } from "react";
import GalleryNav from "./GalleryNav";
import AllGal from './AllPhotosSlides/AllGal';
import BuildingGal from './BuildingSlides/BuildingGal';
import CurtainsGal from './CurtainsSlides/CurtainsGal';
import PaintingGal from './PaintingSlides/PaintingGal';
import KitchenGal from './KitchenSlides/KitchenGal';
import PlumbingGal from './PlumbingMaterials/PlumbingGal';
import StoneGal from './StoneSlides/StoneGal';
import DecoGal from './DecoSlides/DecoGal';
import InteriorGal from './InteriorSlides/InteriorGal'

const Album = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [galleryList, setGalleryList] = useState('all')


  return (
    <>
      <section className="album-section">
        <GalleryNav setGalleryList={setGalleryList}/>
        <div className="img-grid">
          <div>
              {
                galleryList === 'all' ?
                <AllGal scrollToTop={scrollToTop}/>
                : galleryList === 'building' ?
                <BuildingGal scrollToTop={scrollToTop}/>
                : galleryList === 'curtain' ?
                <CurtainsGal scrollToTop={scrollToTop}/>
                : galleryList === 'plumbing' ?
                <PlumbingGal scrollToTop={scrollToTop}/>
                : galleryList === 'painting' ?
                <PaintingGal scrollToTop={scrollToTop}/>
                : galleryList === 'interior' ?
                <InteriorGal scrollToTop={scrollToTop}/>
                : galleryList === 'kitchen' ?
                <KitchenGal scrollToTop={scrollToTop}/>
                : galleryList === 'stone' ?
                <StoneGal scrollToTop={scrollToTop}/>
                : galleryList === 'deco' ?
                <DecoGal scrollToTop={scrollToTop}/>
                : <AllGal />
              }
          </div>
        </div>
      </section>
    </>
  );
};

export default Album;

// ------------------------------ JUNK CODES ----------------------------------

         /* <div
            className="img-group"
            onClick={() => navigate("/ourworks/gallery/allphotos")}
          >
            <img src={`${process.env.PUBLIC_URL}/images/gal83.jpg`} alt="ask" />
            <div className="img-tag">All Photos</div>
          </div>
          <div
            className="img-group"
            onClick={() => navigate("/ourworks/gallery/buildings")}
          >
            <img src={`${process.env.PUBLIC_URL}/images/gal2.jpg`} alt="ask" />
            <div className="img-tag">Buildings</div>
          </div>
          <div
            className="img-group"
            onClick={() => navigate("/ourworks/gallery/stoneworks")}
          >
            <img src={`${process.env.PUBLIC_URL}/images/gal3.jpg`} alt="ask" />
            <div className="img-tag">Stone works</div>
          </div>
          <div
            className="img-group"
            onClick={() => navigate("/ourworks/gallery/paintings")}
          >
            <img src={`${process.env.PUBLIC_URL}/images/gal7.jpg`} alt="ask" />
            <div className="img-tag">Painting works</div>
          </div>
          <div
            className="img-group"
            onClick={() => navigate("/ourworks/gallery/kitchen-setup")}
          >
            <img src={`${process.env.PUBLIC_URL}/images/gal5.jpg`} alt="ask" />
            <div className="img-tag">Kitchen Setup</div>
          </div>
          <div
            className="img-group"
            onClick={() => navigate("/ourworks/gallery/curtains")}
          >
            <img src={`${process.env.PUBLIC_URL}/images/gal67.jpg`} alt="ask" />
            <div className="img-tag">Curtains</div>
          </div>
          <div
            className="img-group"
            onClick={() => navigate("/ourworks/gallery/interior-designs")}
          >
            <img src={`${process.env.PUBLIC_URL}/images/gal66.jpg`} alt="ask" />
            <div className="img-tag">Interior design</div>
          </div>
          <div
            className="img-group"
            onClick={() => navigate("/ourworks/gallery/wallpapers")}
          >
            <img src={`${process.env.PUBLIC_URL}/images/gal50.jpg`} alt="ask" />
            <div className="img-tag">Wallpapers</div>
          </div>
          <div
            className="img-group"
            onClick={() => navigate("/ourworks/gallery/plumbing-materials")}
          >
            <img src={`${process.env.PUBLIC_URL}/images/gal18.jpg`} alt="ask" />
            <div className="img-tag">Plumbing Materials</div>
          </div>
          <div
            className="img-group"
            onClick={() => navigate("/ourworks/gallery/deco")}
          >
            <img src={`${process.env.PUBLIC_URL}/images/gal13.jpg`} alt="ask" />
            <div className="img-tag">Deco</div>
          </div>
          <div
            className="img-group"
            onClick={() => navigate("/ourworks/gallery/others")}
          >
            <img src={`${process.env.PUBLIC_URL}/images/gal15.jpg`} alt="ask" />
            <div className="img-tag">Others</div>
          </div> */

