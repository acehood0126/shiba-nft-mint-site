// import Timer from './Timer'
import Banner from '../../../assets/banner-1.jpg'
import BannerMobile from '../../../assets/banner-1-mobile.jpg'

function Home() {
  return (
    <section
      id="home"
      className="position-relative content-inner d-flex align-items-end justify-content-center"
    >
      <img src={Banner} alt="Shiba Social Club" />
      <h1 className='text-uppercase text-center'>shiba social club</h1>
    </section>
  );
}

export default Home;
