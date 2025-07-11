import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import styled from "styled-components";
import banana from "../../images/banana.svg";
import sandwitch from "../../images/sandwitch.svg";
import soup from "../../images/soup.svg";

const FoodLogSlider = () => {
  return (
    <Wrapper>
      <div className="slider">
        <Splide
          options={{
            rewind: true,
            perPage: 1,
            pagination: false,
          }}
        >
          <SplideSlide>
            <div className="slider_img">
              <img src={sandwitch} alt="Imag 1" className="img" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slider_img">
              <img src={banana} alt="Imag 1" className="img" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slider_img">
              <img alt="Imag 1" src={soup} className="img" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slider_img">
              <img src={sandwitch} alt="Imag 1" className="img" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="slider_img">
              <img src={banana} alt="Imag 1" className="img" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .slider {
    width: 397px;
    margin: 0 auto;
  }
  .slider_img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 316px;
      height: 193px;
      object-fit: cover;
    }
  }
  /* 
  .splide__slide.is-visible.is-active {
    width: 320px !important;
    height: 195px !important;
    .slider_img {
      width: 320px !important;
      height: 195px !important;
    }
    img {
      width: 100% !important;
      height: 100% !important;
    }
  } */
`;

export default FoodLogSlider;
