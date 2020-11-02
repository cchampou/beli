import styled from '@emotion/styled';
import { css } from '@emotion/core';

const common = css`
  color: black;
  font-family: 'Avenir', 'Playfair Display', serif;
`;

export const Heading1 = styled.h1`
  ${common};
  text-align: ${({ center }) => (center ? 'center' : 'inherit')};
  font-size: 2rem;
  font-weight: 100;
`;

export const Heading2 = styled.h2`
  ${common};
  font-size: 1.75rem;
  font-weight: 100;
`;

export const Heading3 = styled.h3`
  ${common};
  font-size: 1.2rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${({ center }) => center && 'center'};
  font-family: 'Open Sans', sans-serif;
`;
