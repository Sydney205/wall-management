import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import WhyChooseUs from "./components/WhyChooseUs";
import Album from "./components/gallery/Gallery";
import Buildings from "./components/gallery/BuildingSlides/Buildings";

function App() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout scrollToTop={scrollToTop} />}>
        <Route index element={<HomePage scrollToTop={scrollToTop} />} />
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
        <Route path="/ourworks/gallery/buildings" element={<Buildings />} />
        <Route path="*" element={<NotFound scrollToTop={scrollToTop} />} />
      </Route>
    </Routes>
  );
}

export default App;
