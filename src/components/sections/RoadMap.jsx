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

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};
`;
const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
`;
const SubTitle = styled.span``;
const Text = styled.span``;
const RoadMapItem = ({ title, subtext }) => {
  return (
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};
const RoadMap = () => {
  return (
    <Section>
      <Title>RoadMap</Title>
      <Container>
        <SavgContainer>
          <DrawSvg />
        </SavgContainer>
        <Items>
          <RoadMapItem title="this title" subtext="this sub title" />
          <RoadMapItem title="this title" subtext="this sub title" />
          <RoadMapItem title="this title" subtext="this sub title" />
          <RoadMapItem title="this title" subtext="this sub title" />
          <RoadMapItem title="this title" subtext="this sub title" />
          <RoadMapItem title="this title" subtext="this sub title" />
        </Items>
      </Container>
    </Section>
  );
};

export default RoadMap;
