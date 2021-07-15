import React from 'react';

import styled from "styled-components";

import { lighten } from "polished";
import Badge from './badge';

const Title = styled.h3`
  color: ${({ theme, color }) => theme.id !== 'dark' ? color : lighten(0.5, color)};
`;

const Link = styled.a`
  font-weight: bold;
  font-size: 19px;
  vertical-align: 5%;
`;

const Ul = styled.ul`
  color: ${({ theme, color }) => theme.id !== 'dark' ? color : lighten(0.5, color)};
`;

const Li = styled.li`
  margin-top: 10;
  margin-top: 1em;
  font-weight: 300;
`;

const Author = styled.div`
  margin-top: 4px;
  margin-left: 4px;
  font-size: 15px;
`;

const Sources = ({ content = [], title = '', color = '#000' }) => (
  <>
    {title && <Title color={color}>{title} :</Title>}

    <Ul color={color}>
      {content.map(({ text, url, author, badge }) => (
        <Li key={text}>
          <Link href={url} target="_blank">{text}</Link>

          {badge && (
            <Badge aria-label="Nouvelle ressource">
              Nouveau !
            </Badge>
          )}

          {author && <Author>{author}</Author>}
        </Li>
      ))}
    </Ul>
  </>
);

export default Sources;
