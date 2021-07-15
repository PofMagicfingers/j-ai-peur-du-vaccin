import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const darkTheme = {
  id: "dark",
  background: "#010101",
  text: "#FEFEFE",
  accent: "#96c",
};

const lightTheme = {
  id: "light",
  background: darkTheme.text,
  text: darkTheme.background,
  accent: "#663399",
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Open Sans, Lato, Roboto, sans-serif;
  }

    a, a:link, a:visited {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    border-bottom: 1px dashed;
    }

    a:hover, a:focus {
    text-decoration: none;
    border-bottom: 1px solid;
    }
`;

const navStyles = {};

const navList = {
  display: "inline-block",
};

const navLi = {
  display: "inline-block",
  listStyleType: "none",
  marginRight: 10,
};

const StyledNavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
`;

const ThemeSwitcher = styled.button`
  font-size: 16px;
  padding: 5px 10px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  margin: 0 10px;
  border-radius: 30px;
`;

const ThemeSwitcherIcon = styled.span`
  margin-right: 5px;
`;

const Layout = ({ style, pageTitle, children }) => {
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
        <nav style={navStyles}>
          <ul style={navList}>
            <li style={navLi}>
              <StyledNavLink to="/">J'ai peur du vaccin</StyledNavLink>
            </li>
            <li style={navLi}>
              <ThemeSwitcher onClick={toggleTheme}>
                {isDarkTheme ? (
                  <>
                    <ThemeSwitcherIcon aria-label="Mode clair" role="img">
                      🌞
                    </ThemeSwitcherIcon>{" "}
                    Passer au thème clair
                  </>
                ) : (
                  <>
                    <ThemeSwitcherIcon aria-label="Mode sombre" role="img">
                      🌜
                    </ThemeSwitcherIcon>{" "}
                    Passer au thème sombre
                  </>
                )}
              </ThemeSwitcher>
            </li>
          </ul>
        </nav>
        <main style={style}>{children}</main>
      </>
    </ThemeProvider>
  );
};

export default Layout;
