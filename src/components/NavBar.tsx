import React, { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineBars,
} from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

interface SubmitOpen {
  open: boolean;
}

const NavBar = () => {
  const [open, setOpen] = useState<SubmitOpen | boolean>(false);

  return (
    <NavContainer>
      <DropDownBar>
        <AiOutlineBars size="2rem" />
      </DropDownBar>
      <NavGroup>
        <NavList>
          <NavItem>shop</NavItem>
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
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    justify-content: space-between;
    align-items: center;
  }
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
  font-weight: 500;
`;
const NavItem = styled.li`
  padding: 1rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;
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
