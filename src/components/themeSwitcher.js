import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 16px;
  padding: 5px 10px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  margin: 0 10px;
  border-radius: 30px;

  position: absolute;
  top: 20px;
  right: 20px;
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const ThemeSwitcher = ({ dark, ...props }) => (
  <Button {...props}>
    {dark ? (
      <>
        <Icon aria-label="Mode clair" role="img">
          🌞
        </Icon>{" "}
        Passer au thème clair
      </>
    ) : (
      <>
        <Icon aria-label="Mode sombre" role="img">
          🌜
        </Icon>{" "}
        Passer au thème sombre
      </>
    )}
  </Button>
);

export default ThemeSwitcher;
