// App's main Component
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import About from './components/About';
import Services from './components/Services';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import WhyChooseUs from "./components/WhyChooseUs";
import Album from "./components/gallery/Gallery";
import AllPhotosSlide from "./components/gallery/AllPhotosSlides/AllPhotosSlide";
import AllPhotos from "./components/gallery/AllPhotosSlides/AllPhotos";
import Buildings from "./components/gallery/BuildingSlides/Buildings";
import BuildingSlide from "./components/gallery/BuildingSlides/BuildingSlide";
import Curtains from "./components/gallery/CurtainsSlides/Curtains";
import CurtainSlide from "./components/gallery/CurtainsSlides/CurtainSlide";
import Deco from './components/gallery/DecoSlides/Deco';
import DecoSlide from './components/gallery/DecoSlides/DecoSlide';
import Interior from "./components/gallery/InteriorSlides/Interior";
import InteriorSlide from "./components/gallery/InteriorSlides/InteriorSlide";
import Kitchen from "./components/gallery/KitchenSlides/Kitchen";
import KitchenSlide from "./components/gallery/KitchenSlides/KitchenSlide";
import Paintings from "./components/gallery/PaintingSlides/Paintings";
import PaintingSlide from "./components/gallery/PaintingSlides/PaintingSlide";
import Plumbing from "./components/gallery/PlumbingMaterials/Plumbing";
import PlumbingSlide from "./components/gallery/PlumbingMaterials/PlumbingSlide";
import StoneWorks from "./components/gallery/StoneSlides/StoneWorks";
import StoneSlide from "./components/gallery/StoneSlides/StoneSlide";
import Wallpapers from "./components/gallery/WallpapersSlides/Wallpapers";
import WallpaperSlide from "./components/gallery/WallpapersSlides/WallpaperSlide";

function App() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout scrollToTop={scrollToTop} />}>
        <Route index element={<HomePage scrollToTop={scrollToTop} />} />
        <Route
          path="/about"
          element={<About scrollToTop={scrollToTop} />}
        />
        <Route
          path="/services"
          element={<Services scrollToTop={scrollToTop} />}
        />
        <Route
          path="/why-choose-us"
          element={<WhyChooseUs scrollToTop={scrollToTop} />}
        />
        <Route
          path="/ourworks"
          element={<Projects scrollToTop={scrollToTop} />}
        />
        <Route
          path="/contact"
          element={<Contact scrollToTop={scrollToTop} />}
        />
        <Route
          path="/ourworks/gallery"
          element={<Album scrollToTop={scrollToTop} />}
        />

        {/* GALLERY AND PHOTOS SLIDES */}
        <Route path="/ourworks/gallery/allphotos" element={<AllPhotos />} />
        <Route
          path="/ourworks/gallery/allphotos-slide"
          element={<AllPhotosSlide />}
        />
        <Route path="/ourworks/gallery/buildings" element={<Buildings />} />
        <Route
          path="/ourworks/gallery/buildings-slide"
          element={<BuildingSlide />}
        />
        <Route path="/ourworks/gallery/curtains" element={<Curtains />} />
        <Route
          path="/ourworks/gallery/curtain-slide"
          element={<CurtainSlide />}
        />
        <Route path="/ourworks/gallery/deco" element={<Deco />} />
        <Route path="/ourworks/gallery/deco-slide" element={<DecoSlide />} />
        <Route
          path="/ourworks/gallery/interior-designs"
          element={<Interior />}
        />
        <Route
          path="/ourworks/gallery/interior-designs-slide"
          element={<InteriorSlide />}
        />
        <Route path="/ourworks/gallery/kitchen-setup" element={<Kitchen />} />
        <Route
          path="/ourworks/gallery/kitchen-slide"
          element={<KitchenSlide />}
        />
        <Route path="/ourworks/gallery/paintings" element={<Paintings />} />
        <Route
          path="/ourworks/gallery/painting-slide"
          element={<PaintingSlide />}
        />
        <Route
          path="/ourworks/gallery/plumbing-materials"
          element={<Plumbing />}
        />
        <Route
          path="/ourworks/gallery/plumbing-materials-slide"
          element={<PlumbingSlide />}
        />
        <Route path="/ourworks/gallery/stoneworks" element={<StoneWorks />} />
        <Route
          path="/ourworks/gallery/stoneworks-slide"
          element={<StoneSlide />}
        />
        <Route path="/ourworks/gallery/wallpapers" element={<Wallpapers />} />
        <Route
          path="/ourworks/gallery/wallpapers-slide"
          element={<WallpaperSlide />}
        />

        {/* 404 Routing */}
        <Route path="*" element={<NotFound scrollToTop={scrollToTop} />} />
      </Route>
    </Routes>
  );
}

export default App;
