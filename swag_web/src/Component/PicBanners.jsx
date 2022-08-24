import React from "react";
import "./picbanner.css";
import picbann from "../Assets/background-banner.png";

function PicBanners() {
  return (
    <div className="banner-images">
      <a href="https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DBSD21-July-BO1-All%3ADealApp%2CBSD21-July-BO1-All%3ADealDt~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&otracker=hp_banner_2_7.bannerX3.BANNER_8SEIE7KJSGEM&fm=neo%2Fmerchandising&iid=M_8a399a43-143d-4c9d-9e2e-fd84e89b3b31_7.8SEIE7KJSGEM&ppt=hp&ppn=homepage&ssid=mat1iiaxts0000001658674498488">
        <img src={picbann} alt="banner-image" />
      </a>
    </div>
  );
}

export default PicBanners;
