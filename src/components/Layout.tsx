import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { createGlobalStyle } from "styled-components";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      {children}
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
