import { useEffect, useState, useRef } from 'react';
import { default as HomeSection } from "./sections/Home";
import RoadMap from "./sections/Roadmap";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Features from "./sections/Features";
import GoldenGuests from "./sections/GoldenGuests";
import Team from "./sections/Team";
import About from "./sections/About";
import FAQ from "./sections/FAQ";

// import { ReactComponent as Brand } from "../../assets/brand.svg";

const Loading = () => (
  <div className="loading--container">
  </div>
)

function Home() {
  const timeoutRef = useRef(null);
  const [isFontLoaded, setIsFontLoaded] = useState(true);

  // useEffect(() => {
  //   document.fonts.onloading = () => {
  //     setIsFontLoaded(false)
  //   };
  //   document.fonts.onloadingdone = () => {
  //     timeoutRef.current = setTimeout(() => {
  //       setIsFontLoaded(true)
  //     }, 800)
  //   };

  //   return () => {
  //     clearTimeout(timeoutRef.current);
  //   }
  // })


  // if(!isFontLoaded) return <Loading/>;

  return (
    <>
      <Header />
      <HomeSection />
      <Features />
      <About />
      <GoldenGuests/>
      <RoadMap />
      <Team/>
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
