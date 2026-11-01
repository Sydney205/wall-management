import { useRouter } from "next/router";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Services from "./components/Services";
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
import Deco from "./components/gallery/DecoSlides/Deco";
import DecoSlide from "./components/gallery/DecoSlides/DecoSlide";
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

const pages = {
  "/": HomePage,
  "/about": About,
  "/services": Services,
  "/why-choose-us": WhyChooseUs,
  "/ourworks": Projects,
  "/contact": Contact,
  "/ourworks/gallery": Album,
  "/ourworks/gallery/allphotos": AllPhotos,
  "/ourworks/gallery/allphotos-slide": AllPhotosSlide,
  "/ourworks/gallery/buildings": Buildings,
  "/ourworks/gallery/buildings-slide": BuildingSlide,
  "/ourworks/gallery/curtains": Curtains,
  "/ourworks/gallery/curtain-slide": CurtainSlide,
  "/ourworks/gallery/deco": Deco,
  "/ourworks/gallery/deco-slide": DecoSlide,
  "/ourworks/gallery/interior-designs": Interior,
  "/ourworks/gallery/interior-designs-slide": InteriorSlide,
  "/ourworks/gallery/kitchen-setup": Kitchen,
  "/ourworks/gallery/kitchen-slide": KitchenSlide,
  "/ourworks/gallery/paintings": Paintings,
  "/ourworks/gallery/painting-slide": PaintingSlide,
  "/ourworks/gallery/plumbing-materials": Plumbing,
  "/ourworks/gallery/plumbing-materials-slide": PlumbingSlide,
  "/ourworks/gallery/stoneworks": StoneWorks,
  "/ourworks/gallery/stoneworks-slide": StoneSlide,
  "/ourworks/gallery/wallpapers": Wallpapers,
  "/ourworks/gallery/wallpapers-slide": WallpaperSlide,
};

export const routePaths = Object.keys(pages);

export default function App({ path }) {
  const router = useRouter();
  const segments = router.query.route;
  const pathname = Array.isArray(segments)
    ? `/${segments.join("/")}`
    : path || "/";
  const Page = pages[pathname] || NotFound;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return <Page scrollToTop={scrollToTop} />;
}
