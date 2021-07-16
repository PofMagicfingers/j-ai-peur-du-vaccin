import React from 'react';

import styled from "styled-components";

const StyledHr = styled.hr`
  margin: 3rem auto;
  max-width: 10rem;
  border: none;
  background: currentColor;
  height: 1px;
`;

const Separator = props => (
  <StyledHr {...props} />
);

export default Separator;
