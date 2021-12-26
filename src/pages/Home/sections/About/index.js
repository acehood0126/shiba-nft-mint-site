import About1 from "../../../../assets/about1.jpg";
import About2 from "../../../../assets/about2.jpg";
import About3 from "../../../../assets/about3.jpg";
import About4 from "../../../../assets/about4.jpg";

import "./about.css";

function About() {
  return (
    <>
      <section id="about" className="section--spacing">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-12 about--image-wrapper">
              <img src={About1} alt="Shiba Watches" loading="lazy" className="about--image" />
              <img src={About2} alt="Shiba Watches" loading="lazy" className="about--image" />
              <img src={About3} alt="Shiba Watches" loading="lazy" className="about--image" />
              <img src={About4} alt="Shiba Watches" loading="lazy" className="about--image" />
            </div>
            <div className="col-lg-5 col-12 about--content">
              <h6 className="text-uppercase">About</h6>
              <h2 className="d-block mb-4 text-uppercase f-akira">
                Join the club!<br />{" "}
              </h2>
              <p>
                When you buy a Shiba, you don't buy only an avatar or a piece of art. <br/><br/>
You are gaining membership access to a club whose benefits and offerings will increase over time. Your Shiba can serve as your digital identity, and open digital doors for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
