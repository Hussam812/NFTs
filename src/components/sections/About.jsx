import React from "react";
import { styled, ThemeProvider } from "styled-components";
import { Button, Carousel } from "../";
import { dark } from "../../styles/Themes";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  /*   color: ${(props) => props.theme.body};
 */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  /* background-color: lightblue; */
  display: flex;
  justify-content: center;

  align-items: center;
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
`;
const SubTitle = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
`;
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
`;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  align-self: flex-start;
`;
const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>Welcome to the Weirdos club.</Title>
          <SubTitle>
            The Weirdos CLUB is a private collection of NFTs-unique digital
            collectables. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </SubTitle>
          <SubTextLight>
            With more than 200+ hand drawn traits, each NFT us unique and comes
            with a membership to an exclusive group of successful inventors.
            Join an ambitiuos ever-growing community with multiple benifits and
            utilities.
          </SubTextLight>
          <ThemeProvider theme={dark}>
            <ButtonContainer>
              <Button text="JOIN OUR DISCORD" link="#" />
            </ButtonContainer>
          </ThemeProvider>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
