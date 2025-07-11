import React, { useState } from "react";
import styled from "styled-components";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import soup from "../../images/soup.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import banana from "../../images/banana.svg";
import rice from "../../images/mobileImages/rice.svg";
import waterMug from "../../images/mobileImages/waterMug.svg";
import sandwitch from "../../images/sandwitch.svg";

const BreakfastSlide = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Wrapper>
      <Swiper
        style={{
          "--swiper-navigation-color": "#2699FB",
          "--swiper-pagination-color": "#2699FB",
          "--swiper-navigation-size": "26px",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={rice} alt="rice" className="big_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banana} alt="sandwitch" className="big_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={waterMug} alt="banana" className="big_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sandwitch} alt="sandwitch" className="big_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banana} alt="banana" className="big_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sandwitch} alt="sandwitch" className="big_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banana} alt="banana" className="big_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sandwitch} alt="sandwitch" className="big_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banana} alt="banana" className="big_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sandwitch} alt="sandwitch" className="big_img" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={rice} alt="rice" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={waterMug} alt="waterMug" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rice} alt="rice" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={waterMug} alt="waterMug" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rice} alt="rice" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={waterMug} alt="waterMug" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rice} alt="rice" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={waterMug} alt="waterMug" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rice} alt="rice" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={waterMug} alt="waterMug" />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: none;
  }
  .carousel .thumb {
    border: none;
  } */

  background: #f1f9ff 0% 0% no-repeat padding-box;
  border: 1px solid #f1f9ff;
  margin-bottom: 10px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  body {
    background: #000;
    color: #000;
  }

  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: 80%;
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  .big_img {
    width: 256px !important;
    height: 186px !important;
    object-fit: contain !important;
  }
`;

export default BreakfastSlide;
