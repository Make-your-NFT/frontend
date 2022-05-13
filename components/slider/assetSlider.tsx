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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.layout}>
      <div className={styles.newAssets}>New Assets</div>
      <div className={styles.assetLayout}>
        <Slider {...settings}>
          {assets.map((asset, index) => {
            return (
              <React.Fragment key={index}>
                <SliderAsset
                  title={asset["title"]}
                  author={asset["author"]}
                  introduce={""}
                />
              </React.Fragment>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default AssetSlider;
