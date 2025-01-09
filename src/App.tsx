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
      <Parallax pages={3}>
        <ParallaxLayer offset={0}>
          <Header />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
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
