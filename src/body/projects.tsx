import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import img from "../assets/test-img.png";

function Projects() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-img-wrapper">
              <img className="card-img-top " src={img}></img>
            </div>
            <div
              className="card-body"
              style={{
                background: " linear-gradient(to bottom, #cd9cf2, #f6f3ff)",
              }}
            >
              <h5 className="card-title">Manaskara</h5>
              <p className="card-text">
                ChatGPT like web app for freely available for every one to use
                latest gpt models. including image uploads
              </p>
              <a href="#" className="btn btn-primary">
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card">
            <div className="card-img-wrapper">
              <img className="card-img-top " src={img}></img>
            </div>

            <div
              className="card-body"
              style={{
                background: " linear-gradient(to bottom, #a1c4fd, #f6f3ff)",
              }}
            >
              <h5 className="card-title">Alet EYE</h5>
              <p className="card-text">
                Driver drowsiness detection sysytem using opencv
              </p>
              <a href="#" className="btn btn-primary">
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
