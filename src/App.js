import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Slider from "./components/gallery/Slider";
import WhyChooseUs from "./components/WhyChooseUs";
import Album from "./components/Album";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/why-choose-us' element={<WhyChooseUs />} />
        <Route path="/ourworks" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourworks/gallery" element={<Slider />} />
        <Route path='/gallery' element={<Album />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
