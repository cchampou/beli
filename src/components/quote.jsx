import React from 'react';
import PropTypes from 'prop-types';
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
  position: relative;
  margin: 4rem 1rem;
  padding: 3rem 2rem;
  &:before {
    ${quoteStyle}  
  }
  
  &:after {
    ${quoteStyle}
  }
`;

const Author = styled('span')`
  position: absolute;
  right: 20px;
  bottom: 10px;
`;

const Quote = ({ children, author }) => (
  <Content>
    {children}
    <Author>{author}</Author>
  </Content>
);

Quote.defaultProps = {
  children: null,
  author: null,
};

Quote.propTypes = {
  children: PropTypes.node,
  author: PropTypes.string,
};

export default Quote;
