import React from "react";
import styled from "styled-components";
import { Button } from "./";

import Img1 from "../assets/bighead.svg";
import Img2 from "../assets/bighead-1.svg";
import Img3 from "../assets/bighead-2.svg";
import Img4 from "../assets/bighead-3.svg";
import Img5 from "../assets/bighead-4.svg";
import Img6 from "../assets/bighead-5.svg";

const Section = styled.section`
  width: 100vw;
  height: 40rem;
  position: relative;
  border-top: 2px soild ${(props) => props.theme.text};
  border-top: 2px soild ${(props) => props.theme.text};

  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 15rem;
    height: auto;
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px ${(props) => props.theme.text};
`;

const ButtonContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
`;

const JoinNow = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.fontlg};
  padding: 1.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  font-weight: 600;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;
const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={Img1} alt="The weirdos" />
        <img src={Img2} alt="The weirdos" />
        <img src={Img3} alt="The weirdos" />
        <img src={Img4} alt="The weirdos" />
        <img src={Img5} alt="The weirdos" />
        <img src={Img6} alt="The weirdos" />
      </ImgContainer>
      <Title>
        join the <br /> weirdos club
      </Title>
      <ButtonContainer>
        <JoinNow>join now</JoinNow>
      </ButtonContainer>
    </Section>
  );
};

export default Banner;
