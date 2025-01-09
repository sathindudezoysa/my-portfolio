import { useState } from "react";
import "./App.css";
import Header from "./header_components/Header";
import Footer from "./footer/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import FrontCover from "./body/front-conver";
import Projects from "./body/projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Parallax pages={3} className="annimation">
        <ParallaxLayer offset={0} speed={1}>
          <div className="animated-layer" id="foreground"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2}>
          <div className="animated-layer" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.01}>
          <Header />
          <FrontCover />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <Projects />
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
