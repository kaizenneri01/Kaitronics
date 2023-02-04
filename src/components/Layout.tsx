import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
    * {
        font-family: roboto;
        margin: 0;
        padding: 0;
    }

`;

export default Layout;
