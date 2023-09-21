import React from "react";
import styled from "styled-components";
import { DrawSvg } from "../";

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
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SavgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul``;

const RoadMap = () => {
  return (
    <Section>
      <Title>RoadMap</Title>
      <Container>
        <SavgContainer>
          <DrawSvg />
        </SavgContainer>
        <Items>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </Items>
      </Container>
    </Section>
  );
};

export default RoadMap;
