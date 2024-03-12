import { useState } from "react";
import Partnership from "./components/Partnership";
import FAQ from "./components/FAQ";

import "./App.css";
import Footer from "./components/Footer";
import Session from "./components/Session";
import Testimonial from "./components/Testimonial";
import VideoPlayer from "./components/Videoplayer";
import Hero from "./components/Herosection";
import Content from "./components/Content";

function App() {

  return (

    <>
      <Partnership />
        <Session />
        <Testimonial />
        <Hero/>
        <VideoPlayer />
         <Content />
         <FAQ />
         <Footer />
    </>
  );
}

export default App;