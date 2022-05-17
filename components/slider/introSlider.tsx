import Slider from "react-slick";
import { assets } from "testSample/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "components/slider/introSlider.module.css";
import React from "react";
import IntroAsset from "components/slider/introAsset";

const IntroSlider = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
        },
      },
    ],
  };

  return (
    <section className={styles.layout}>
      <Slider {...settings}>
        {assets.map((asset, index) => {
          return (
            <React.Fragment key={index}>
              <IntroAsset
                title={asset["title"]}
                author={`${asset["author"]}${index}`}
                image={asset["image"]}
              />
            </React.Fragment>
          );
        })}
      </Slider>
    </section>
  );
};

export default IntroSlider;
