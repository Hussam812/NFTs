import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { RoundCirc } from "./sections/Home";
const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  @media (max-width: 64em) {
    position: fixed;
    display: ${(props) => (props.state === "true" ? `flex` : `none`)};
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, .85)`};
    backdrop-filter: blur(2px);
    transition: all 0.3s ease;
    transform: ${(props) =>
      props.state === "true" ? `translateY(0)` : `translateY(1000%)`};
    flex-direction: column;
    justify-content: center;
  }
`;
const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
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

const Buttoncontainer = styled.div`
  @media (max-width: 64em) {
    display: none;
  }
`;

const MobileMenu = ({ state, setClick }) => {
  return (
    <HumburgerMenu state={state.toString()} onClick={() => setClick(!state)}>
      &nbsp;
    </HumburgerMenu>
  );
};

const Menu = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setClick(!click);
  };
  return (
    <>
      <MobileMenu state={click} setClick={setClick} />

      <MenuList state={click.toString()}>
        <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
        <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
        <MenuItem onClick={() => scrollTo("roadmap")}>Roadmap</MenuItem>
        <MenuItem onClick={() => scrollTo("showcase")}>Showcase</MenuItem>
        <MenuItem onClick={() => scrollTo("team")}>Team</MenuItem>
        <MenuItem onClick={() => scrollTo("faq")}>Faq</MenuItem>
        <MenuItem>
          {click && <Button text="Contact Wallet" link="https:google.com" />}
        </MenuItem>
      </MenuList>

      <Buttoncontainer className="desktop">
        <Button text="Contact Wallet" link="https:google.com" />
      </Buttoncontainer>
    </>
  );
};

export default Menu;
