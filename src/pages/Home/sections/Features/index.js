import MintBanner from "../../../../assets/features-pic-x2.jpg";

import "./features.css";

function Features() {
  return (
    <>
      <section id="features" className='section--spacing pt-0'>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-12 features--content">
              <h6 className="text-uppercase">features</h6>
              <h2 className="d-block mb-4 text-uppercase f-akira">
                Welcome to the Shiba Social Club
                <br/>
              </h2>
              <p>
                The Shiba Social Club is a collection of 7777 Shiba NFTs inspired
by the new wealthy generation of crypto-currency and NFTs. <br/><br/>

Each piece is a unique 3d artwork with a collection of more than 150+ traits. The objective is to build the strongest community and project around NFTs.
              </p>

              <a href="https://discord.gg/shibasocialclub" target='_blank' rel='noreferrer' className='gradient-btn'>join us</a>
            </div>
            <div className="col-lg-6 col-12 features--image-wrapper">
              <img src={MintBanner} alt="Shiba Watches" className="features--image" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
