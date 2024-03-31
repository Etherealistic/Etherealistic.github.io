import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 30%);
  backdrop-filter: blur(1px);
  z-index:1;
  color: #fff;
  padding: 1rem;
`;

const NavItem = styled.li`
  list-style: none;
  
  margin: 0 1rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #bada55;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }
`;

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <Nav>
      <Logo>Portfolio</Logo>
      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? 'Close' : 'Menu'}
      </MobileNavToggle>
      <DesktopNav>
        <NavItem><a href="#home">Home</a></NavItem>
        <NavItem><a href="#projects">Projects</a></NavItem>
        <NavItem><a href="#about">About me</a></NavItem>
        <NavItem><a href="#contact">Contact</a></NavItem>
      </DesktopNav>
      <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
        <NavItem><a href="/">Home</a></NavItem>
        <NavItem><a href="/">Projects</a></NavItem>
        <NavItem><a href="/">About me</a></NavItem>
        <NavItem><a href="/">Contact</a></NavItem>
      </MobileNav>
    </Nav>
  );
};

export default NavBar;