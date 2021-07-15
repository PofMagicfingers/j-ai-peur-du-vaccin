import React, { useState, useEffect } from "react";

import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import ThemeSwitcher from "./themeSwitcher";

const darkTheme = {
  id: "dark",
  background: "#010101",
  text: "#FEFEFE",
  accent: "#B088D7",
};

const lightTheme = {
  id: "light",
  background: darkTheme.text,
  text: darkTheme.background,
  accent: "#663399",
};

const StyledMain = styled.main`
  padding: 2vh 8vw;
  max-width: 720px;
  margin: 50px auto auto auto;
`;

const Layout = ({ pageTitle, children }) => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <title>{pageTitle}</title>

        <ThemeSwitcher dark={isDarkTheme} onClick={toggleTheme} />

        <StyledMain>{children}</StyledMain>
      </>
    </ThemeProvider>
  );
};

export default Layout;
