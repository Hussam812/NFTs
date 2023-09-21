import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper/modules";

import Img1 from "../assets/bighead.svg";
import Img2 from "../assets/bighead-1.svg";
import Img3 from "../assets/bighead-2.svg";
import Img4 from "../assets/bighead-3.svg";
import Img5 from "../assets/bighead-4.svg";
import Img6 from "../assets/bighead-5.svg";
import Img7 from "../assets/bighead-6.svg";
import Img8 from "../assets/bighead-7.svg";
import Img9 from "../assets/bighead-8.svg";
import Img10 from "../assets/bighead-9.svg";

import Arrow from "../assets/Arrow.svg";
const Container = styled.div`
  width: 25vw;
  height: 70vh;

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    top: 60%;

    width: 4rem;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    &:after {
      display: none;
    }
  }

  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(-180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    &:after {
      display: none;
    }
  }
`;

function Carousel() {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ type: "fraction" }}
        scrollbar={{ draggable: true }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Img1} alt="The Weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt="The Weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt="The Weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt="The Weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img5} alt="The Weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img6} alt="The Weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img7} alt="The Weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img8} alt="The Weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img9} alt="The Weridos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img10} alt="The Weridos" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Carousel;
