import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import img from "../assets/test-img.png";
import manaskara_img from "../assets/manaskara-gpt.png";

function Projects() {
  return (
    <div className="container projects">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <div className="card">
            <div className="card-img-wrapper">
              <img className="card-img-top " src={manaskara_img}></img>
            </div>
            <div
              className="card-body"
              style={{
                background: " linear-gradient(to bottom, #cd9cf2, #f6f3ff)",
              }}
            >
              <h5 className="card-title">Manaskara</h5>
              <p className="card-text">
                Unlock the Power of AI At Manaskara, we believe that everyone
                should have access to the incredible capabilities of AI. Our
                mission is to democratize artificial intelligence by providing
                free access to advanced GPT models in a simple user-friendly
                interface, allowing users to explore, create, and innovate
                without limitations. Currently Manaskara is running on GPT-4 and
                hoping to give you other models to work with.
              </p>

              <a
                href="https://gpt.manaskara.org/info"
                className="btn btn-primary"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-3 ">
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
                Visit From here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
