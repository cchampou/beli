import styled from '@emotion/styled';
import { css } from '@emotion/core';
import theme from '../../config/theme.json';

const common = css`
  color: ${theme.colors.secondary};
  font-family: 'Playfair Display', serif;
`;

export const Heading1 = styled.h1`
  ${common};
  font-size: 2rem;
`;

export const Heading2 = styled.h2`
  ${common};
  font-size: 1.75rem;
`;

export const Heading3 = styled.h3`
  ${common};
  font-size: 1.2rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Open Sans', sans-serif;
`;
