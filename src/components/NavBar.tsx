import React, { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineBars,
  AiOutlineClose,
} from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

interface SubmitOpen {
  open: boolean;
}

const NavBar = () => {
  const [open, setOpen] = useState<SubmitOpen | boolean>(false);

  const menuOpen = () => {
    setOpen(!open);
  };

  return (
    <NavContainer>
      {open && (
        <DDMenu>
          <DDIcon>
            <AiOutlineClose
              size="2rem"
              color="white"
              onClick={() => setOpen(false)}
            />
          </DDIcon>
          <DDList>
            <DDItem>shop</DDItem>
            <DDItem>Services</DDItem>
            <DDItem>Promo</DDItem>
            <DDItem>Community</DDItem>
          </DDList>
        </DDMenu>
      )}
      <DropDownBar>
        <AiOutlineBars size="2rem" color="white" onClick={menuOpen} />
      </DropDownBar>
      <NavGroup>
        <NavList>
          <NavItem>
            <Link to={`shop`}>shop</Link>
          </NavItem>
          <NavItem>Services</NavItem>
          <NavItem>Promo</NavItem>
          <NavItem>Community</NavItem>
        </NavList>
      </NavGroup>
      <NavGroupTwo>
        <NavList>
          <NavItemIcon>
            <AiOutlineHeart size="1.5rem" />
          </NavItemIcon>
          <NavItemIcon>
            <AiOutlineShoppingCart size="1.5rem" />
          </NavItemIcon>
          <NavItemIcon>
            <RxAvatar size="3rem" />
          </NavItemIcon>
        </NavList>
      </NavGroupTwo>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: relative;
  display: flex;
  padding: 0 2rem;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: #31393c;
  @media screen and (max-width: 600px) {
    justify-content: space-between;
    align-items: center;
  }
`;
const DDMenu = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #31393c;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
const DDIcon = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
`;
const NavGroup = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const NavGroupTwo = styled(NavGroup)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavList = styled.ul`
  display: flex;
  list-style: none;
  font-weight: 400;
  color: white;
`;

const DDList = styled(NavList)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
const NavItem = styled.li`
  padding: 1rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: translateY(3px);
  }
`;
const DDItem = styled(NavItem)``;
const NavItemIcon = styled(NavItem)`
  padding: 1rem 0.5rem;
  margin-bottom: auto;
  margin-top: auto;
`;

const DropDownBar = styled.div`
  transition: all 0.3s;
  &:hover {
    transform: scale(1.2);
  }
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export default NavBar;
