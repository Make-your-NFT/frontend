import Slider from "react-slick";
import { assets } from "testSample/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "components/slider/assetSlider.module.css";
import SliderAsset from "./sliderAsset";
import React from "react";

const AssetSlider = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "100px",
    slidesToScroll: 1,
    variableWidth: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div style={{ background: "red" }}>ki</div>,
  };

  return (
    <section className={styles.layout}>
      <div className={styles.newAssets}>New Assets</div>

      <Slider {...settings}>
        {assets.map((asset, index) => {
          return (
            <React.Fragment key={index}>
              <SliderAsset title={asset[0]} author={asset[1]} introduce={""} />
            </React.Fragment>
          );
        })}
      </Slider>
    </section>
  );
};

export default AssetSlider;