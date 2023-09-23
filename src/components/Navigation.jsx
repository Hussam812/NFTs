import React, { useState } from "react";
import styled from "styled-components";
import { Button, Logo, Menu } from "./";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
  @media (max-width: 64em) {
  }
`;

const HumburgerMenu = styled.span`
  width: ${(props) => (props.state == "true" ? `2rem` : `1.5rem`)};
  height: 2px;
  background-color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.state == "true"
      ? `translateX(-50%) rotate(90deg)`
      : `translateX(-50%) rotate(0)`};

  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &::after,
  &::before {
    content: " ";
    background-color: ${(props) => props.theme.text};
    width: ${(props) => (props.state == "true" ? `1rem` : `1.5rem`)};
    height: 3px;
    right: ${(props) => (props.state == "true" ? `-2px` : `0`)};

    position: absolute;
    transition: all 0.3s ease;
  }
  @media (max-width: 64em) {
    display: flex;
  }
  &::after {
    top: ${(props) => (props.state == "true" ? `.3rem` : `.5rem`)};
    transform: ${(props) =>
      props.state == "true" ? `rotate(-40deg)` : `rotate(0)`};
  }
  &::before {
    bottom: ${(props) => (props.state == "true" ? `.3rem` : `.5rem`)};
    transform: ${(props) =>
      props.state == "true" ? `rotate(40deg)` : `rotate(0)`};
  }
`;
const MobileMenu = ({ props }) => {
  const [click, setClick] = useState(false);
  return (
    <HumburgerMenu state={click.toString()} onClick={() => setClick(!click)}>
      &nbsp;
    </HumburgerMenu>
  );
};

const Navigation = () => {
  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <Menu />
      </NavBar>
    </Section>
  );
};

export default Navigation;
