import React from "react";
import styled from "styled-components";
import { Banner, Logo, Menu } from "./";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";
import LinkedIn from "../icons/LinkedIn";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.body};
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.text};
`;

const Container = styled.div`
  widows: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Items = styled.ul`
  flex: 1;
  list-style: noen;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const Item = styled.li`
  list-style: none;

  width: fit-content;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background-color: #000;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;
const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="https://facebook.com" target="_blank" rel="noopener">
              <Facebook />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener">
              <Instagram />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener">
              <Twitter />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener">
              <LinkedIn />
            </a>
          </IconList>
        </Left>
        <Items>
          <Item onClick={() => scrollTo("home")}>Home</Item>
          <Item onClick={() => scrollTo("about")}>About</Item>
          <Item onClick={() => scrollTo("roadmap")}>Roadmap</Item>
          <Item onClick={() => scrollTo("showcase")}>Showcase</Item>
          <Item onClick={() => scrollTo("team")}>Team</Item>
          <Item onClick={() => scrollTo("faq")}>Faq</Item>
        </Items>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Weirdos Club. allrights reserved.
        </span>
        <span>Made with &#10084; by Me following "CODEBUCKS"</span>
      </Bottom>
    </Section>
  );
};

export default Footer;
