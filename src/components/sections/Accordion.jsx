import React, { useState } from "react";
import styled from "styled-components";
import { Minus } from "../../icons/Minus";
import { Plus } from "../../icons/Plus";

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  margin: 3rem 0;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Indicator = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontxxl};

  svg {
    width: 1rem;
    height: auto;
    fill: ${(props) => props.theme.carouselColor};
  }
`;

const Reveal = styled.div`
  display: ${(props) => (props.clicked === "true" ? "block" : "none")};
  margin-top: 1rem;
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 300;
  line-height: 1.1rem;
`;
const Accordion = ({ title, children }) => {
  const [collapse, setCollaps] = useState(false);
  return (
    <Container onClick={() => setCollaps(!collapse)}>
      <Title>
        {title}
        <Name>
          {collapse ? (
            <Indicator>
              <Minus />
            </Indicator>
          ) : (
            <Indicator>
              <Plus />
            </Indicator>
          )}
        </Name>
      </Title>
      <Reveal clicked={collapse.toString()}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
