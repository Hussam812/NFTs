import React from "react";
import styled from "styled-components";

import Img1 from "../../assets/bighead.svg";
import Img2 from "../../assets/bighead-1.svg";
import Img3 from "../../assets/bighead-2.svg";
import Img4 from "../../assets/bighead-3.svg";
import Img5 from "../../assets/bighead-4.svg";
import Img6 from "../../assets/bighead-5.svg";
import Img7 from "../../assets/bighead-6.svg";
import Img8 from "../../assets/bighead-7.svg";
import Img9 from "../../assets/bighead-8.svg";
import Confetti from "../Confetti";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  backdrop-filter: blur(4px);
  z-index: 5;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
`;
const ImgContainer = styled.div`
  width: 80%;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  padding: 1rem;
  border-radius: 20px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;
const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-self: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;
const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-self: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, .9)`};
  font-weight: 400;
`;
const MemberComponent = ({ img, name = "", position = "" }) => {
  return (
    <Item>
      <ImgContainer>
        <img src={img} alt="" />
      </ImgContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section>
      <Confetti />
      <Title>Team</Title>
      <Container>
        <MemberComponent img={Img1} name="skyBlaze" position="founer" />
        <MemberComponent img={Img2} name="megnum" position="Co-founer" />
        <MemberComponent img={Img3} name="monkey king" position="Director" />
        <MemberComponent img={Img4} name="Black Panther" position="Manger" />
        <MemberComponent img={Img5} name="DeathStroke" position="Artist" />
        <MemberComponent
          img={Img6}
          name="LAZYKONG"
          position="Social Media Manger"
        />
        <MemberComponent
          img={Img7}
          name="CYPER PUNK"
          position="Blockchain Specialist"
        />
        <MemberComponent img={Img8} name="MONK" position="web3 Developer" />
        <MemberComponent img={Img9} name="BANANA" position="Graphic Designer" />
      </Container>
    </Section>
  );
};

export default Team;
