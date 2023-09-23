import React from "react";
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;

  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akya Telivigala", cursive;
  }
  .text-1 {
    color: blue;
  }

  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }

  @media (max-width: 70em) {
    align-self: center;
    text-align: center;
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    button {
      margin: 0 auto;
    }
  }
`;

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Discover a new era of cool
        <TypewriterComponent
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class='text-1'>NFTs.</span>`)
              .pauseFor(200)
              .deleteAll()
              .typeString("<span class='text-2'>Collectable Item.</span>")
              .pauseFor(200)
              .deleteAll()
              .typeString("<span class='text-3'>Ape Killers!</span>")
              .pauseFor(200)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Bored of Apes? Try SomeThing New.</SubTitle>
      <ButtonContainer>
        <Button text="Explore" link="$about" />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
