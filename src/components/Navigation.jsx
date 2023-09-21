import React from "react";
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
`;
const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu />
        <Button text="Contact Wallet" link="https:google.com" />
      </NavBar>
    </Section>
  );
};

export default Navigation;
