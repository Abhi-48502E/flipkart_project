import React from "react";
import CarouselResponsive from "./CarouselResponsive";
import RawPics from "./RawPics";
import Footer from "./Footer";
import Details from "./Details";
import PicBanners from "./PicBanners";

function Home() {
  return (
    <div>
      <RawPics />
      <CarouselResponsive />
      <PicBanners />
      <Details />
      <Footer />
    </div>
  );
}

export default Home;
