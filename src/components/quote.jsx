import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Paragraph } from './typography';

const quoteStyle = css`
  content: ' " ';
  font-family: Times New Roman;
  color: lightgray;
  font-style: italic;
  font-size: 2rem;
`;

const Content = styled(Paragraph)`
  margin: 4rem 1rem;
  padding: 2rem 3rem;
  border-radius: 10px;
  box-shadow: 0 0 5px #EEEEEE;
  &:before {
    ${quoteStyle}  
  }
  
  &:after {
    ${quoteStyle}
  }
`;

const Quote = ({ children }) => (
  <Content>
    {children}
  </Content>
);

export default Quote;
